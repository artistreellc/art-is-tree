import React from 'react';
import { Head } from 'vite-react-ssg';
import ReviewManagementPanel from '@/components/admin/ReviewManagementPanel';
import SyncReviewsButton from '@/components/SyncReviewsButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const AdminReviewsPage = () => {
  return (
    <>
      <Head>
        <title>Manage Reviews | Tree Service Virginia Beach</title>
        <meta name="description" content="Review management dashboard. Manage and display customer reviews. Admin access only." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#1B4D3E]">Review Management</h1>
              <p className="text-gray-500 mt-1">Curate and organize customer testimonials for the website.</p>
            </div>
            <div className="flex gap-3">
              <SyncReviewsButton />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Management Panel */}
            <div className="lg:col-span-2 space-y-6">
              <ReviewManagementPanel />
            </div>

            {/* Side Instructions / Tips */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Instructions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-gray-600">
                  <p>
                    <strong className="text-gray-900 block mb-1">Reordering</strong>
                    Drag and drop the cards in the list to change the order they appear on the Testimonials page.
                  </p>
                  <p>
                    <strong className="text-gray-900 block mb-1">Replacing</strong>
                    Use the "Replace" button to swap a review while keeping its position in the list.
                  </p>
                  <p>
                    <strong className="text-gray-900 block mb-1">Syncing</strong>
                    If you don't see a recent Google review, click the "Sync Google Reviews" button to fetch the latest data.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#1B4D3E] text-white border-none">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Pro Tip</CardTitle>
                  <CardDescription className="text-blue-100">
                    Choosing the right testimonials
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-blue-50">
                  <p>
                    Select reviews that mention specific services (like "tree removal" or "stump grinding") and location names. This helps with local SEO and trust.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminReviewsPage;