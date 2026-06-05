
import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Elke Paukner",
    location: "Germany",
    text: "30.01.2025 wunderschöne Wüste Namibias. Swakobmund, Salzseen, Oase, blühende Welwitchia... sehr empfehlenswerter Ausflug mit Eugene.",
    image: "/lovable-uploads/c772c7df-4f5c-4955-883b-c6449c8e867a.png",
    englishTranslation: "Beautiful Namibian desert. Swakopmund, salt lakes, oasis, blooming Welwitchia... highly recommended excursion with Eugene."
  },
  {
    name: "Heiki Reiki",
    location: "Germany",
    text: "Der Ausflug war wirklich toll und Guide und Reiseleiter haben sich viel Mühe gegeben. Danke, man kann den Ausflug nur weiter empfehlen.",
    image: "/lovable-uploads/e970f309-5561-4b6f-994c-295da0d491bc.png",
    englishTranslation: "The excursion was really great and the guide and tour leader put in a lot of effort. Thank you, one can only recommend the excursion."
  },
  {
    name: "Wilfried Gerntrup",
    location: "Germany",
    text: "Mit Eugene war ich auch unterwegs. War ein super Tag. Eines der Highlights war für mich der Besuch der Oase.",
    image: "/lovable-uploads/2279cfbc-7332-42de-b66a-f8b2ea0012af.png",
    englishTranslation: "I was also on the road with Eugene. It was a great day. One of the highlights for me was visiting the oasis."
  },
  {
    name: "Marion Graßhoff",
    location: "Germany",
    text: "Es war gestern eine ganz tolle Tour mit netten Menschen. Wir haben viel gesehen und können Eugene nur empfehlen, vielen Dank für die schönen Erlebnisse.",
    image: "/lovable-uploads/a4ab4922-15cd-47f6-9889-8f2aac27d770.png",
    englishTranslation: "Yesterday was a great tour with nice people. We saw a lot and can only recommend Eugene, thank you very much for the beautiful experiences."
  },
  {
    name: "Sarah T.",
    location: "United Kingdom",
    text: "Our airport transfer and subsequent tour was perfect! Eugene was professional, knowledgeable, and made our Namibian experience unforgettable.",
    englishTranslation: ""
  },
  {
    name: "Michael R.",
    location: "United States",
    text: "As cruise ship passengers, we were delighted with the excursion. We saw incredible sights and learned so much about Namibia's culture and wildlife.",
    englishTranslation: ""
  },
  {
    name: "Johanna K.",
    location: "Germany",
    text: "The private tour through Namibia exceeded our expectations. Comfortable vehicles, excellent service, and amazing destinations.",
    englishTranslation: ""
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-namibia-terracotta mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Read authentic reviews from our international guests who experienced our tours and transfers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={cn(
                "border border-gray-200 transition-all duration-300 hover:shadow-lg",
                "reveal",
                index % 3 === 0 ? "hover:border-namibia-terracotta/50" : "",
                index % 3 === 1 ? "hover:border-namibia-sand/50" : "",
                index % 3 === 2 ? "hover:border-blue-300/50" : ""
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
                {testimonial.englishTranslation && (
                  <p className="text-gray-500 text-sm italic border-t border-gray-100 pt-2 mt-2">
                    Translation: "{testimonial.englishTranslation}"
                  </p>
                )}
              </CardContent>
              <CardFooter className="pt-4 border-t flex justify-between items-center">
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                {testimonial.image && (
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <AspectRatio ratio={1/1} className="w-full h-full">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                        FB
                      </div>
                    </AspectRatio>
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">These testimonials are collected from our guests' feedback on social media and review platforms.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
