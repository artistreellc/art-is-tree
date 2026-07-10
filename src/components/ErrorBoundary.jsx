import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#f0e6d2] p-4 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-red-100">
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="font-playfair text-2xl font-bold text-[#1B4D3E] mb-4">
              Something went wrong
            </h1>
            <p className="font-inter text-gray-600 mb-6">
              We encountered an unexpected error while loading the application.
            </p>
            
            {/* Dev details - hidden in prod usually, but good for debugging now */}
            {import.meta.env.DEV && this.state.error && (
               <div className="mb-6 p-3 bg-gray-100 rounded text-left overflow-auto max-h-32 text-xs font-mono text-red-800 break-all">
                 <p className="font-bold mb-1">Error:</p>
                 {this.state.error.toString()}
               </div>
            )}

            <Button 
              onClick={this.handleReload} 
              className="bg-[#1B4D3E] hover:bg-[#153e32] text-white w-full py-6 rounded-lg font-bold text-lg"
            >
              <RefreshCw className="mr-2 w-5 h-5" /> Reload Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;