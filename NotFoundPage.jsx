import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Tree Service Virginia Beach</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to find the information you need." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4 py-20">
        <div className="text-center max-w-md mx-auto">
          <div
           
          >
            <AlertTriangle className="w-24 h-24 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-6xl font-bold text-[#1B4D3E] mb-4 mt-0">404</h2>
            <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-0">Page Not Found</h1>
            <p className="text-gray-600 mb-8 text-lg">
              The page you are looking for doesn't exist or has been moved. 
              Let's get you back to safety.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#1B4D3E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#153e32] transition-colors shadow-lg"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;