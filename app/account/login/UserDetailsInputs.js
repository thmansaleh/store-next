import  { useState } from 'react';
import { User, Phone, Send, Check, Loader } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://store-api-new.vercel.app/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setName('');
      setPhone('');
      setShowSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      alert('There was a problem submitting your data.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="bg-white rounded-2xl shadow-lg w-80 p-8 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Contact Details</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full py-3 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white"
              />
              <User className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
            </div>
          </div>
          
          <div className="mb-5">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
                className="w-full py-3 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white"
              />
              <Phone className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center gap-2 bg-blue-500 text-white rounded-lg py-3 px-4 font-medium transition-all duration-200 hover:bg-blue-600 hover:shadow-md focus:ring-2 focus:ring-blue-300 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit</span>
              </>
            )}
          </button>
          
          {showSuccess && (
            <div className="mt-4 flex items-center justify-center gap-2 text-green-600 bg-green-50 border border-green-100 rounded-lg p-3 text-sm">
              <Check className="w-4 h-4" />
              <span>Thanks! Your details have been submitted.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}