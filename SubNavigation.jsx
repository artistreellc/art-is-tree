import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, FileText, Cookie } from 'lucide-react';
import { cn } from '@/lib/utils';

const SUB_NAV_LINKS = [
  { name: 'Terms and Conditions', path: '/terms-and-conditions', icon: FileText },
  { name: 'Privacy Policy', path: '/privacy-policy', icon: Shield },
  { name: 'Cookie Policy', path: '/cookies', icon: Cookie },
];

const SubNavigation = () => {
  const location = useLocation();

  return (
    <div className="w-full bg-muted border-b border-border py-2.5 px-4 overflow-x-auto">
      <div className="container mx-auto max-w-7xl">
        <nav className="flex items-center space-x-6 md:space-x-8 whitespace-nowrap" aria-label="Legal and Utility Navigation">
          {SUB_NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center gap-1.5 text-xs md:text-sm font-medium transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
                  isActive 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5", isActive ? "text-primary" : "text-muted-foreground")} />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SubNavigation;