import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendarDays, Users, MapPin, MessageSquare, Phone, Mail, User, Facebook } from 'lucide-react';
import Navbar from '@/components/Navbar'; // Import Navbar if you want it on this page
import Footer from '@/components/Footer'; // Import Footer
import PageHero from '@/components/PageHero'; // Import the new component

// Import social media feedback images
import fbFeedback1 from '@/assets/fb-feedback-1.jpg';
import fbFeedback2 from '@/assets/fb-feedback-2.jpg';
import fbFeedback3 from '@/assets/fb-feedback-3.jpg';
import fbFeedback from '@/assets/fb-feedback.jpg';

// You might want a simplified Navbar variant for non-home pages
// or pass props to Navbar to adjust its behavior/links

// TODO: Replace with a relevant background image URL for Booking
const bookingHeroImageUrl = 'https://images.unsplash.com/photo-1560174038-da43ac74f31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1804&q=80'; // Example: Map/Planning

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    guests: '',
    date: '',
    message: ''
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
      setSubmissionSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        tour: '',
        guests: '',
        date: '',
        message: ''
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    if (name === 'email') {
      const ccField = document.getElementById('cc-email') as HTMLInputElement;
      if (ccField) ccField.value = value;
    }
  };

  const getFullDomain = () => {
    return `${window.location.protocol}//${window.location.host}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Consider if Navbar needs adjustments for non-homepage context */}
      <Navbar />

      <main className="flex-grow">
        <PageHero
          title="Book Your Adventure"
          subtitle="Ready to explore Namibia? Fill out the form below to start planning your trip."
          backgroundImageUrl={bookingHeroImageUrl}
        />
        <section id="booking-form" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
              {submissionSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Booking Request Sent!</h3>
                  <p className="text-gray-600 mb-6">Thank you for your interest in our tours. We've received your request and will contact you shortly to confirm your booking details.</p>
                  <p className="text-gray-600 mb-8">A confirmation has also been sent to your email address.</p>
                  <Button 
                    onClick={() => setSubmissionSuccess(false)}
                    className="bg-namibia-terracotta hover:bg-namibia-orange text-white"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form 
                  className="space-y-6" 
                  action="https://formsubmit.co/vdmshuttle@gmail.com" 
                  method="POST"
                >
                  {/* FormSubmit Configuration - Full URLs and proper configuration */}
                  <input type="hidden" name="_subject" value="New Booking Request - Eugene Tours" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  {/* This is the critical fix - using a full absolute URL for _next */}
                  <input type="hidden" name="_next" value={`${getFullDomain()}/booking?success=true`} />
                  <input type="hidden" name="_cc" id="cc-email" />
                  
                  {/* Optional: add form URL for better error tracking */}
                  <input type="hidden" name="_url" value={window.location.href} />
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="flex items-center mb-2 text-gray-700 font-medium">
                        <User className="w-4 h-4 mr-2 text-namibia-terracotta" /> Full Name
                      </Label>
                      <Input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Your Full Name" 
                        required 
                        className="w-full" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="flex items-center mb-2 text-gray-700 font-medium">
                        <Mail className="w-4 h-4 mr-2 text-namibia-terracotta" /> Email Address
                      </Label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        placeholder="your.email@example.com" 
                        required 
                        className="w-full" 
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="flex items-center mb-2 text-gray-700 font-medium">
                      <Phone className="w-4 h-4 mr-2 text-namibia-terracotta" /> Phone Number (Optional)
                    </Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="+264 81 123 4567" 
                      className="w-full" 
                    />
                  </div>

                  {/* Tour, Guests, Date */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="tour" className="flex items-center mb-2 text-gray-700 font-medium">
                        <MapPin className="w-4 h-4 mr-2 text-namibia-terracotta" /> Desired Tour / Service
                      </Label>
                      <Input 
                        type="text" 
                        id="tour" 
                        name="tour" 
                        value={formData.tour} 
                        onChange={handleChange} 
                        placeholder="e.g., Dune 7 Tour" 
                        required 
                        className="w-full" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests" className="flex items-center mb-2 text-gray-700 font-medium">
                        <Users className="w-4 h-4 mr-2 text-namibia-terracotta" /> Number of Guests
                      </Label>
                      <Input 
                        type="number" 
                        id="guests" 
                        name="guests" 
                        value={formData.guests} 
                        onChange={handleChange} 
                        placeholder="e.g., 2" 
                        min="1" 
                        required 
                        className="w-full" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="date" className="flex items-center mb-2 text-gray-700 font-medium">
                        <CalendarDays className="w-4 h-4 mr-2 text-namibia-terracotta" /> Preferred Date(s)
                      </Label>
                      <Input 
                        type="text" 
                        id="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange} 
                        placeholder="e.g., 2024-08-15" 
                        required 
                        className="w-full" 
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="flex items-center mb-2 text-gray-700 font-medium">
                      <MessageSquare className="w-4 h-4 mr-2 text-namibia-terracotta" /> Special Requests / Questions
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Any specific requirements or questions?" 
                      rows={4} 
                      className="w-full" 
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-namibia-terracotta hover:bg-namibia-orange px-10 py-3 text-lg"
                    >
                      Send Booking Request
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* New Social Media Feedback Section */}
        <section id="social-feedback" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-namibia-darkblue mb-4">Guest Feedback</h2>
              <div className="flex items-center justify-center">
                <div className="h-1 w-20 bg-namibia-terracotta mr-2"></div>
                <Facebook className="text-blue-600 h-6 w-6" />
                <div className="h-1 w-20 bg-namibia-terracotta ml-2"></div>
              </div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">See what our guests have to say about their experiences with Eugene Tours & Transfers on Facebook.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={fbFeedback1} alt="Facebook feedback" className="w-full h-auto object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Heiki Reiki</h3>
                  <p className="text-gray-600 italic mb-2">
                    "Der Ausflug war wirklich toll und Guide und Reiseleiter haben dich viel Mühe gegeben. Danke, man kann den Ausflug nur weiter empfehlen."
                  </p>
                  <p className="text-gray-700">
                    "The excursion was really great and the guide and tour leader put in a lot of effort. Thank you, I can only recommend this tour further."
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={fbFeedback2} alt="Facebook feedback" className="w-full h-auto object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Wilfried Gerntrup</h3>
                  <p className="text-gray-600 italic mb-2">
                    "Mit Eugene war ich auch unterwegs. War ein super Tag. Eines der Highlights war für mich der Besuch der Oase."
                  </p>
                  <p className="text-gray-700">
                    "I was also traveling with Eugene. It was a great day. One of the highlights for me was visiting the oasis."
                  </p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={fbFeedback3} alt="Facebook feedback" className="w-full h-auto object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Marion Graßhoff</h3>
                  <p className="text-gray-600 italic mb-2">
                    "Es war gestern eine ganz tolle Tour mit netten Menschen. Wir haben viel gesehen und können Eugene nur empfehlen, vielen Dank für die schönen Erlebnisse 👍😋🙋🏽‍♂️"
                  </p>
                  <p className="text-gray-700">
                    "Yesterday was a great tour with nice people. We saw a lot and can only recommend Eugene, many thanks for the beautiful experiences 👍😋🙋🏽‍♂️"
                  </p>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={fbFeedback} alt="Facebook feedback" className="w-full h-auto object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Elke Paukner</h3>
                  <p className="text-gray-600 italic mb-2">
                    "30.01.2025 wunderschöne Wüste Namibias. Swakobmund, Salzseen, Oase, blühende Welwitchia... sehr empfehlenswerter Auflug mit Eugene."
                  </p>
                  <p className="text-gray-700">
                    "30.01.2025 beautiful Namibian desert. Swakopmund, salt lakes, oasis, flowering Welwitchia... highly recommended excursion with Eugene."
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="https://www.facebook.com/share/1ARJE44GAJ/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 bg-white rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                <Facebook className="mr-2 h-5 w-5" />
                See More Reviews on Facebook
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage; 