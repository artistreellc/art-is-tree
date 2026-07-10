import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

// NOTE: BreadcrumbList JSON-LD is emitted globally by
// components/seo/BreadcrumbListSchema.jsx (mounted in Layout) using the
// canonical domain. This component renders only the visible breadcrumb trail
// to avoid emitting a second, competing BreadcrumbList node.
const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200 py-3 mt-20">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link to="/" className="flex items-center hover:text-[#1B4D3E] transition-colors">
              <Home className="w-4 h-4 mr-1" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const formattedName = name
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');

            return (
              <li key={name} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                {isLast ? (
                  <span className="font-semibold text-[#1B4D3E] text-sm" aria-current="page">
                    {formattedName}
                  </span>
                ) : (
                  <Link to={routeTo} className="hover:text-[#1B4D3E] transition-colors">
                    {formattedName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;