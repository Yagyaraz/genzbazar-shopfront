
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-light-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-light-blue-900 animate-fade-up">
            The shopping destination for Gen Z
          </h1>
          <p className="text-lg text-light-blue-700 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Discover the latest trends and products curated specifically for your generation. Quality meets style at GenZBazar.
          </p>
          <div className="pt-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#products"
              className="inline-block bg-light-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:bg-light-blue-600 hover:scale-105"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
