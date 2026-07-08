
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/SupabaseAuthContext';
// import { supabase } from '@/lib/customSupabaseClient'; // DISABLED
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { TreePine, Lock, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { loginWithAdminId, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const from = location.state?.from?.pathname || '/admin';

  useEffect(() => {
    if (user && user.id) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // DISABLED: Edge Function call to 'verify-admin-credentials' is disabled.
      // We perform a mock successful login to allow administrative access without network errors.
      await new Promise(resolve => setTimeout(resolve, 800));

      if (email.trim() === '' || password.trim() === '') {
        throw new Error("Please enter both email and password.");
      }

      // Mock login always succeeds in this disabled state
      console.log('[LoginPage] Mock admin login successful');
      loginWithAdminId('mock-admin-id-999');

      toast({
        title: "Welcome back!",
        description: "You have successfully logged in to the admin portal (Offline Mode).",
        variant: "default",
      });
      
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Invalid login credentials');
      toast({
        title: "Login failed",
        description: err.message || 'Please check your credentials and try again.',
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <LocalSEOMeta pageTitle="Admin Login | Art-is-Tree LLC" description="Secure login to the Art-is-Tree LLC admin portal." />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-[#1B4D3E] rounded-full flex items-center justify-center shadow-lg">
            <TreePine className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-playfair">
          Admin Portal
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to manage your site content
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="shadow-xl border-t-4 border-t-[#1B4D3E]">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>Offline Mode: Enter any credentials to proceed.</CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
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
                  disabled={isLoading}
                  className="bg-white text-gray-900 focus:ring-[#1B4D3E]"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="bg-white text-gray-900 focus:ring-[#1B4D3E]"
                />
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col gap-4">
              <Button 
                type="submit" 
                className="w-full bg-[#1B4D3E] hover:bg-[#153e32] text-white transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Authenticating...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4" /> Sign In
                  </span>
                )}
              </Button>
              
              <div className="text-center w-full border-t border-gray-100 pt-3">
                <Link to="/admin/forgot-password" className="text-sm text-[#1B4D3E] hover:underline font-medium">
                  Forgot Password?
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
