
import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // In a real implementation, you would use a form submission service 
    // like FormSubmit, Formspree, or a server endpoint
    try {
      // Email service simulation (would be replaced with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log(`Sending email to genzbazar7@gmail.com with:
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `);
      
      setSubmitted(true);
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        form.reset();
      }, 3000);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black/5 h-10 w-10 flex items-center justify-center rounded-full shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Visit Us</h4>
                    <p className="text-gray-600">New Baneshwor, Kathmandu Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-black/5 h-10 w-10 flex items-center justify-center rounded-full shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-gray-600">+977-9803654396</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-black/5 h-10 w-10 flex items-center justify-center rounded-full shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-gray-600">genzbazar7@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium mb-4">Business Hours</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Sunday - Saturday:</span>
                    {/* <span>24 hours in your service</span> */}
                  </li>
                 
                  <li className="flex justify-between">
                  <span>24 hours in your service</span>                    
                  </li>
                  <li className="flex justify-between">
                    <span>We can deliver our product with in a day all over Nepal</span>
                    
                  </li>
                  {/* <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              {submitted ? (
                <div className="bg-green-50 text-green-700 py-4 px-6 rounded-lg text-center">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm mt-1">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-lg border border-gray-200 p-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-lg border border-gray-200 p-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-gray-200 p-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
