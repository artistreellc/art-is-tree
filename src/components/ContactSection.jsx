import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

/**
 * @param {Object} props
 * @param {string} [props.title]
 */
const ContactSection = ({
  title = "Get Your Free Estimate Today"
}) => {
  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-6">{title}</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Ready to transform your landscape? Contact our tree care team for a free, no-obligation quote.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#D4AF37]/20 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#1B4D3E]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us 24/7</p>
                  <a href="tel:7573195131" onClick={() => { if (window.gtag_report_phone_click) window.gtag_report_phone_click(); }} className="text-xl font-bold text-gray-900 hover:text-[#D4AF37] transition-colors">(757) 319-5131</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#D4AF37]/20 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#1B4D3E]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <a href="mailto:artistreeofvirginia@gmail.com" className="text-lg font-bold text-gray-900 hover:text-[#D4AF37] transition-colors">artistreeofvirginia@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#D4AF37]/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#1B4D3E]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Service Area</p>
                  <p className="text-lg font-bold text-gray-900">Virginia Beach & Hampton Roads</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center text-center">
            <h3 className="font-playfair text-2xl font-bold text-[#1B4D3E] mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-8">
              We offer comprehensive tree care, 24/7 emergency response, and free estimates across Hampton Roads. Connect with us to schedule your consultation.
            </p>
            <div className="space-y-4">
              <Button asChild className="w-full bg-[#1B4D3E] hover:bg-[#153e32] text-white py-6 text-lg font-bold">
                <Link to="/contact">Get Your Free Estimate</Link>
              </Button>
              <Button asChild variant="outline" className="w-full py-6 text-lg font-bold border-2 border-[#1B4D3E] text-[#1B4D3E] hover:bg-gray-50">
                <a href="tel:7573195131">Call (757) 319-5131</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;