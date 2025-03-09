
import React from "react";
import { Smartphone, ShoppingBag, Users } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About GenZBazar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're reimagining shopping for the digital generation with products that match your lifestyle and values.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-6 rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="bg-black/5 h-16 w-16 flex items-center justify-center rounded-2xl mx-auto mb-6">
              <Smartphone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital First</h3>
            <p className="text-gray-600">
              Born in the digital age, we understand how modern shoppers discover, evaluate, and purchase products.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="bg-black/5 h-16 w-16 flex items-center justify-center rounded-2xl mx-auto mb-6">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
            <p className="text-gray-600">
              Every product in our collection is carefully selected for quality, style, and sustainability.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="bg-black/5 h-16 w-16 flex items-center justify-center rounded-2xl mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
            <p className="text-gray-600">
              We build products based on real feedback from our community, ensuring we meet your actual needs.
            </p>
          </div>
        </div>
        
        <div className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                GenZBazar was founded in 2023 by a group of young entrepreneurs who were frustrated with traditional retail experiences that didn't cater to their generation's needs and preferences.
              </p>
              <p className="text-gray-600">
                We started with a simple mission: create a shopping platform that truly understands how Gen Z discovers, evaluates, and purchases products. Today, we're proud to offer a curated collection of high-quality items that blend style, functionality, and sustainability.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1074&auto=format&fit=crop" 
                alt="Team at work" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
