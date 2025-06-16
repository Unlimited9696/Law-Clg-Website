"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function ReachUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    cetMarks: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '81d3b850-23f0-4ead-b88e-d1ab316bae7d',
          ...formData
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          cetMarks: '',
          city: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <div id="admission-enquiry" className="py-12 bg-gray-50">
      <div className="lg:text-center mb-12">
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl" role="form" aria-labelledby="enquiry-title">
          <h2 id="enquiry-title" className="text-3xl font-bold text-center mb-8 text-gray-800 relative">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo.png"
              alt="College Logo"
              width={150}
              height={150}
            />
          </div>
            <span className="relative inline-block">
              Admission Enquiry
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform origin-left transition-transform duration-300"></span>
            </span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-gray-600 text-center mb-6">Please fill in your details below and we'll get back to you shortly.</p>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out hover:border-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out hover:border-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your 10-digit mobile number"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out hover:border-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="cetMarks" className="block text-sm font-medium text-gray-700">CET Marks</label>
              <input
                type="number"
                id="cetMarks"
                name="cetMarks"
                value={formData.cetMarks}
                onChange={handleChange}
                placeholder="Enter your CET score (0-200)"
                min="0"
                max="200"
                title="Please enter your CET marks between 0 and 200"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out hover:border-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out hover:border-blue-400"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </button>
            </div>
            {submitStatus === 'success' && (
              <div className="text-center text-green-600 bg-green-50 p-4 rounded-md border border-green-200 animate-fade-in">
                <svg className="w-6 h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Form submitted successfully! We'll contact you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-center text-red-600 bg-red-50 p-4 rounded-md border border-red-200 animate-fade-in">
                <svg className="w-6 h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                An error occurred. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}