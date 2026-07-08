import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/lib/customSupabaseClient';
import { hashPassword, validatePasswordStrength } from '@/utils/passwordResetUtils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle2, Lock, TreePine } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();

  const [isValidating, setIsValidating] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [error, setError] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setError('No reset token provided. Please request a new link.');
        setIsValidating(false);
        return;
      }

      try {
        const { data, error: rpcError } = await supabase.rpc('validate_reset_token', {
          p_token: token
        });

        if (rpcError) throw rpcError;
        
        if (data && data.admin_email) {
          setIsValid(true);
          setUserEmail(data.admin_email);
        } else {
          setError('Token is invalid or has expired.');
        }
      } catch (err) {
        console.error(err);
        setError(err.message || 'Failed to verify token. Please request a new link.');
      } finally {
        setIsValidating(false);
      }
    };

    verifyToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!validatePasswordStrength(password)) {
      setError('Password does not meet all strength requirements.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Hash the password on the frontend using bcryptjs as requested
      const hashedPassword = hashPassword(password);

      const { data, error: rpcError } = await supabase.rpc('complete_password_reset', {
        p_token: token,
        p_new_password_hash: hashedPassword
      });

      if (rpcError) throw rpcError;

      setSuccess(true);
      setTimeout(() => {
        navigate('/admin/login');
      }, 2000);
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPasswordStrong = validatePasswordStrength(password);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <LocalSEOMeta pageTitle="Create New Password | Art-is-Tree LLC" description="Set a new secure password for your admin account." />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-[#1B4D3E] rounded-full flex items-center justify-center shadow-lg">
            <TreePine className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-playfair">
          Create New Password
        </h1>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="shadow-xl border-t-4 border-t-[#1B4D3E]">
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
            {userEmail && <CardDescription>For account: {userEmail}</CardDescription>}
          </CardHeader>
          
          <CardContent>
            {isValidating ? (
              <div className="flex flex-col items-center justify-center py-6">
                <div className="w-8 h-8 border-4 border-[#1B4D3E] border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-500">Verifying secure token...</p>
              </div>
            ) : !isValid ? (
              <div className="space-y-4">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Verification Failed</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
                <Button asChild className="w-full bg-[#1B4D3E] hover:bg-[#153e32]">
                  <Link to="/admin/forgot-password">Request New Link</Link>
                </Button>
              </div>
            ) : success ? (
              <Alert className="bg-green-50 border-green-200 text-green-800">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your password has been successfully reset. Redirecting to login...
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="password">New Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="bg-white text-gray-900 focus:ring-[#1B4D3E]"
                  />
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500">Requirements:</span>
                      <span className={`text-xs font-semibold ${isPasswordStrong ? 'text-green-600' : 'text-red-500'}`}>
                        {isPasswordStrong ? 'Valid' : 'Incomplete'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">
                      Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="bg-white text-gray-900 focus:ring-[#1B4D3E]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#1B4D3E] hover:bg-[#153e32] text-white transition-colors mt-6"
                  disabled={isSubmitting || !isPasswordStrong || password !== confirmPassword}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Resetting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Lock className="w-4 h-4" /> Complete Reset
                    </span>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPasswordPage;