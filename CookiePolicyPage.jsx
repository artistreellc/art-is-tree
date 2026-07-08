import React from 'react';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const CookiePolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <LocalSEOMeta pageTitle="Cookie Policy | Art-is-Tree LLC Virginia Beach" description="Learn how Art-is-Tree LLC uses cookies on our website to improve your experience and analyze site traffic. View our cookie preferences and opt-out options." />
      
      <header>
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#1B4D3E] mb-8 mt-0">Cookie Policy</h1>
      </header>
      
      <main className="prose prose-lg text-gray-700">
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <h2 className="mt-8 mb-4">1. What Cookies Are</h2>
        <p>
          Cookies are small text files that are stored on your computer, tablet, or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information. Cookies enable our website to "remember" your actions and preferences (such as login details, language, and display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another. They are essential for a smooth digital experience.
        </p>

        <h2 className="mt-8 mb-4">2. Types of Cookies Used</h2>
        <p>
          Art-is-Tree LLC utilizes several categories of cookies to ensure our website functions correctly and to analyze how visitors engage with our content:
        </p>
        <ul>
          <li><strong>Essential Cookies:</strong> These are strictly necessary for the core functionality of our website. They enable basic features such as page navigation, secure access to administrative areas (like our admin login), and session management. Without these cookies, the website cannot function properly.</li>
          <li><strong>Analytics Cookies:</strong> We use analytics cookies, primarily through Google Analytics, to collect aggregated data on how users navigate our site. This includes information on which pages are most popular, how long users stay, and what links they click. This data helps us improve our website’s performance and user experience.</li>
          <li><strong>Marketing & Tracking Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites. They also help us track conversion rates, such as when a user fills out a free quote request form after clicking an advertisement.</li>
        </ul>

        <h2 className="mt-8 mb-4">3. How to Manage Cookies</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your web browser. Most browsers allow you to block all cookies, accept all cookies, or select which specific types of cookies you wish to allow. You can also delete cookies that have already been set. Please note that if you choose to reject or disable essential cookies, your access to certain functionality and areas of our website may be restricted or operate incorrectly. For detailed instructions on managing cookies, please consult your browser's "Help" or "Settings" menu.
        </p>

        <h2 className="mt-8 mb-4">4. Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics and deliver interactive features. Specifically, our site utilizes Google services (like Google Maps and Google Analytics) which deploy their own cookies to track geographic interactions and comprehensive traffic data. We also utilize Supabase for our database and authentication processes, which requires specific session tokens and cookies to verify secure user access. These third-party providers have their own privacy and cookie policies governing how they handle data.
        </p>

        <h2 className="mt-8 mb-4">5. Cookie Retention Periods</h2>
        <p>
          The length of time a cookie remains on your device depends on whether it is a "session" or "persistent" cookie. Session cookies are temporary and expire immediately when you close your web browser. Persistent cookies remain on your hard drive until they expire or are manually deleted. Our essential session cookies are cleared upon exiting the site, while our analytics and marketing cookies generally have a retention period ranging from 30 days to two years, allowing us to accurately track returning visitors and long-term site performance metrics.
        </p>

        <hr className="my-8 border-gray-200" />
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Art-is-Tree LLC. All rights reserved. Virginia Beach, VA.
        </p>
      </main>
    </div>
  );
};

export default CookiePolicyPage;