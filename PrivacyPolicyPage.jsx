import React from 'react';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <LocalSEOMeta pageTitle="Privacy Policy | Art-is-Tree LLC Virginia Beach" description="Art-is-Tree LLC privacy policy. Learn how we protect your personal information and data when you request tree care services in Virginia Beach and Hampton Roads." />
      
      <header>
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#1B4D3E] mb-8 mt-0">Privacy Policy</h1>
      </header>
      
      <main className="prose prose-lg text-gray-700">
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <h2 className="mt-8 mb-4">1. Information Collection and Use</h2>
        <p>
          At Art-is-Tree LLC, your privacy is paramount. We collect personal information to provide, maintain, and improve our tree care services. When you request a quote, submit a contact form, or interact with our site, we may ask for details such as your name, email address, phone number, and physical address. We collect this data explicitly to process your service requests, schedule site visits, issue accurate estimates, and communicate with you effectively regarding your project. We do not engage in the sale or unauthorized rental of your personal information to third parties. Every piece of data we collect is utilized strictly within the scope of providing you with exceptional arboricultural services and ensuring the smooth operation of our business engagements.
        </p>

        <h2 className="mt-8 mb-4">2. Data Protection Measures</h2>
        <p>
          We employ industry-standard security measures to safeguard your personal data from unauthorized access, disclosure, alteration, or destruction. Our website uses Secure Socket Layer (SSL) encryption to protect information transmitted between your browser and our servers. We store user data in secure, managed database environments with strict access controls. Only authorized personnel—who are bound by confidentiality obligations—have access to your information, and such access is limited to the extent necessary to perform their specific job functions. While no digital platform can guarantee absolute security, we continuously review and update our security practices to mitigate risks and protect your privacy.
        </p>

        <h2 className="mt-8 mb-4">3. User Rights and Choices</h2>
        <p>
          You retain full control over your personal data. Under applicable privacy laws, you have the right to request access to the information we hold about you. You may also request corrections to any inaccurate data or ask for the deletion of your personal information from our systems, provided it is no longer necessary for legitimate business or legal purposes. If you wish to exercise these rights, or if you want to opt out of any promotional communications, you can contact us directly at our provided email address. We are committed to responding to your requests promptly and transparently.
        </p>

        <h2 className="mt-8 mb-4">4. Cookie Usage</h2>
        <p>
          Our website utilizes "cookies"—small text files placed on your device—to enhance your browsing experience. Cookies help us remember your preferences, understand how you interact with our site, and improve site performance. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted). By analyzing cookie data, we can optimize our site's layout and content to better serve our visitors in the Virginia Beach area. You can adjust your browser settings to refuse cookies or alert you when a cookie is being sent, though some site features may not function optimally without them.
        </p>

        <h2 className="mt-8 mb-4">5. Third-Party Services</h2>
        <p>
          To deliver a robust digital experience and analyze site traffic, we partner with trusted third-party service providers. This includes Google Analytics, which helps us understand user behavior and site performance; Google Maps, which we use to display our service areas and neighborhood coverage; and Supabase, which manages our database infrastructure and authentication processes securely. These third parties may collect anonymous, aggregated data or utilize their own cookies. We carefully vet our partners to ensure their data protection standards align with ours. We encourage you to review the respective privacy policies of these third-party services to understand their specific data handling practices.
        </p>

        <h2 className="mt-8 mb-4">6. Contact Information</h2>
        <p>
          If you have any questions, concerns, or feedback regarding this Privacy Policy or our data management practices, please do not hesitate to reach out to us. You can contact our privacy compliance team via email at artistreeofvirginia@gmail.com, or by phone at +1 (757) 319-5131. We value your trust and are always available to discuss how we protect your personal information.
        </p>

        <hr className="my-8 border-gray-200" />
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Art-is-Tree LLC. All rights reserved. Virginia Beach, VA.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;