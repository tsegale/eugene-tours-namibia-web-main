import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'; // Added MessageCircle for WhatsApp

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions before booking? Feel free to reach out to us directly using the details below. We're happy to help plan your perfect Namibian adventure.
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
          {/* Location Column */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center md:items-start">
             <div className="flex items-center mb-4 text-namibia-darkblue">
               <MapPin className="w-6 h-6 mr-3 flex-shrink-0" />
               <h3 className="text-xl font-semibold">Our Location</h3>
             </div>
             <address className="not-italic text-gray-700">
               Park View, Hage Geingob Street<br />
               Walvis Bay, Namibia
             </address>
          </div>

          {/* Phone Column */}
           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center md:items-start">
             <div className="flex items-center mb-4 text-namibia-darkblue">
               <Phone className="w-6 h-6 mr-3 flex-shrink-0" />
               <h3 className="text-xl font-semibold">Call Us</h3>
             </div>
             <a href="tel:+264817055147" className="text-gray-700 hover:text-namibia-terracotta transition duration-300 block mb-2">
               +264 81 705 5147
             </a>
             <a href="tel:+264814655655" className="text-gray-700 hover:text-namibia-terracotta transition duration-300 block">
               +264 81 465 5655
             </a>
             {/* WhatsApp Info */}
             <div className="flex items-center mt-4 text-green-600">
                <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium">WhatsApp available on +264 81 705 5147</span>
             </div>
          </div>

          {/* Email Column */}
           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center md:items-start">
             <div className="flex items-center mb-4 text-namibia-darkblue">
               <Mail className="w-6 h-6 mr-3 flex-shrink-0" />
               <h3 className="text-xl font-semibold">Email Us</h3>
             </div>
             <a href="mailto:eugene@eugenetours.net" className="text-gray-700 hover:text-namibia-terracotta transition duration-300 break-all block mb-2">
               eugene@eugenetours.net
             </a>
              <a href="mailto:vdmshuttle@gmail.com" className="text-gray-700 hover:text-namibia-terracotta transition duration-300 break-all block">
               vdmshuttle@gmail.com
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
