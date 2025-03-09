
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-6xl md:text-9xl font-bold text-black">404</h1>
        <p className="text-xl md:text-2xl font-medium mt-4 mb-8">Oops! Page not found</p>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-black text-white px-6 py-3 rounded-full text-base font-medium transition-all hover:bg-black/90"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
