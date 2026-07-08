import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/customSupabaseClient';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle2, Mail, ArrowLeft, TreePine } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { data, error: rpcError } = await supabase.rpc('generate_reset_token', {
        p_email: email
      });

      if (rpcError) {
        if (rpcError.message.includes('Too many requests')) {
          throw new Error('Too many requests, try again in 1 hour');
        }
        throw rpcError;
      }

      // Token generated successfully. In a real-world scenario, you would 
      // trigger an email service with the returned token here.
      console.log('Token successfully generated via RPC.');
      
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <LocalSEOMeta pageTitle="Forgot Password | Art-is-Tree LLC" description="Reset your admin portal password." />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-[#1B4D3E] rounded-full flex items-center justify-center shadow-lg">
            <TreePine className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-playfair">
          Reset Password
        </h1>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="shadow-xl border-t-4 border-t-[#1B4D3E]">
          <CardHeader>
            <CardTitle>Forgot your password?</CardTitle>
            <CardDescription>
              Enter your email address to generate a secure reset link.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {success ? (
              <Alert className="bg-green-50 border-green-200 text-green-800">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription>
                  Check your email for the reset link. If the account exists, you'll receive instructions shortly.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@artistreevabeach.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="bg-white text-gray-900 focus:ring-[#1B4D3E]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#1B4D3E] hover:bg-[#153e32] text-white transition-colors"
                  disabled={isSubmitting || !email}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Generating...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Generate Reset Link
                    </span>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-center border-t border-gray-100 pt-4">
            <Link to="/admin/login" className="flex items-center text-sm text-[#1B4D3E] hover:underline font-medium">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;