
import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { Star, Image, MapPin, Settings, LogOut, Database, Search } from 'lucide-react';

const AdminPanel = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  const adminCards = [
    {
      title: 'SEO Audit Report',
      description: 'Run full technical & content SEO audits',
      icon: Search,
      link: '/admin/seo-audit',
      color: 'text-indigo-600'
    },
    {
      title: 'Review Management',
      description: 'Manage and curate customer testimonials',
      icon: Star,
      link: '/admin/reviews',
      color: 'text-yellow-600'
    },
    {
      title: 'Gallery Management',
      description: 'Upload and organize project photos',
      icon: Image,
      link: '/gallery',
      color: 'text-blue-600'
    },
    {
      title: 'Service Areas',
      description: 'Manage neighborhoods and coverage zones',
      icon: MapPin,
      link: '/service-areas',
      color: 'text-green-600'
    },
    {
      title: 'Google Places Debug',
      description: 'Test and debug Google Places API connection',
      icon: Database,
      link: '/admin/debug-places',
      color: 'text-purple-600'
    },
    {
      title: 'Neighborhoods Debug',
      description: 'Debug and verify neighborhood data',
      icon: Database,
      link: '/admin/debug-neighborhoods',
      color: 'text-orange-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Admin Dashboard | Tree Service Virginia Beach</title>
        <meta name="description" content="Admin dashboard for tree service. Manage reviews, gallery, neighborhoods & site content. Admin access only." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#1B4D3E]">Admin Dashboard</h1>
              <p className="text-gray-500 mt-1">Welcome back, {user?.email}</p>
            </div>
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-gray-50 ${card.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </div>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-[#1B4D3E] hover:bg-[#2A7A5E]">
                      <Link to={card.link}>Manage</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Quick Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-800 space-y-2">
              <p>• SEO Audit: Regularly scan your website structure to ensure high organic rankings.</p>
              <p>• Review Management: Select and reorder testimonials displayed on the website</p>
              <p>• Gallery: Sync photos from Google Places to showcase your work</p>
              <p>• Service Areas: Monitor neighborhood coverage and geocoding status</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
