'use client';

import React from 'react';
import { FaDownload, FaPlay, FaCalculator, FaFileContract, FaPercentage, FaBalanceScale, FaChartLine, FaLightbulb, FaUsers, FaFileInvoiceDollar, FaDesktop, FaClipboardList, FaReceipt } from 'react-icons/fa';

export default function InternManualPage() {
  const slides = [
    {
      id: 1,
      title: "Title Slide",
      description: "Introduction to the Moneybird manual for Glodinas Finance B.V. interns",
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "Welcome & Introduction",
      description: "Welcome message and overview of what you'll learn",
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "What is Moneybird?",
      description: "Introduction to Moneybird and its key features",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Getting Started",
      description: "Login process and navigation basics",
      color: "bg-pink-500"
    },
    {
      id: 5,
      title: "Creating Your First Invoice",
      description: "Step-by-step invoice creation process",
      color: "bg-teal-500"
    },
    {
      id: 6,
      title: "Managing Contacts",
      description: "Adding, editing, and organizing client information",
      color: "bg-red-500"
    },
    {
      id: 7,
      title: "Recording Expenses",
      description: "Expense tracking and receipt management",
      color: "bg-yellow-500"
    },
    {
      id: 8,
      title: "Basic Reporting",
      description: "Accessing and exporting financial reports",
      color: "bg-orange-500"
    },
    {
      id: 9,
      title: "Tips & Best Practices",
      description: "Do's, don'ts, and efficiency tips",
      color: "bg-green-600"
    },
    {
      id: 10,
      title: "Basic Accounting Terms",
      description: "Essential accounting concepts for Moneybird users",
      color: "bg-blue-600"
    },
    {
      id: 11,
      title: "Understanding Financial Documents",
      description: "Learn about invoices, quotes, and other financial documents",
      color: "bg-purple-600"
    },
    {
      id: 12,
      title: "Dutch VAT Basics",
      description: "Understanding VAT rates and compliance in the Netherlands",
      color: "bg-green-600"
    },
    {
      id: 13,
      title: "Bank Reconciliation",
      description: "Matching bank statements with Moneybird records",
      color: "bg-indigo-600"
    },
    {
      id: 14,
      title: "Advanced Reporting & Analysis",
      description: "Unlocking deeper insights from your financial data",
      color: "bg-purple-700"
    },
    {
      id: 15,
      title: "Resources & Support",
      description: "Help resources and next steps",
      color: "bg-gray-500"
    }
  ];

  const learningAreas = [
    {
      icon: <FaDesktop className="text-2xl" />,
      title: "Navigation Basics",
      description: "Learn to navigate the Moneybird interface with confidence",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <FaFileInvoiceDollar className="text-2xl" />,
      title: "Invoice Creation",
      description: "Create professional invoices step-by-step",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Contact Management",
      description: "Organize and manage client information efficiently",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <FaReceipt className="text-2xl" />,
      title: "Expense Tracking",
      description: "Record and categorize business expenses",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: <FaClipboardList className="text-2xl" />,
      title: "Financial Reports",
      description: "Generate and export essential business reports",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Best Practices",
      description: "Tips and tricks for efficient workflow",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: <FaCalculator className="text-2xl" />,
      title: "Accounting Fundamentals",
      description: "Essential accounting terms and concepts",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      icon: <FaFileContract className="text-2xl" />,
      title: "Document Types",
      description: "Understanding invoices, quotes, and financial documents",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: <FaPercentage className="text-2xl" />,
      title: "Dutch VAT System",
      description: "VAT rates, compliance, and regulations",
      color: "bg-teal-50 text-teal-600"
    },
    {
      icon: <FaBalanceScale className="text-2xl" />,
      title: "Bank Reconciliation",
      description: "Matching bank statements with your records",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Advanced Analytics",
      description: "Deep insights and custom reporting",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  const handleSlideClick = (slideId: number) => {
    // For now, we'll just scroll to the slide or show an alert
    // In a full implementation, this would navigate to individual slide pages
    alert(`Opening slide ${slideId}: ${slides[slideId - 1].title}`);
  };

  const handleDownloadPDF = () => {
    // Trigger the PDF download
    window.open('/api/intern-manual/download-pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-2xl">GF</span>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold">Glodinas Finance B.V.</h1>
              <p className="text-blue-200">Moneybird Training Manual</p>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Moneybird Manual for Interns
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            A comprehensive step-by-step guide to mastering Moneybird accounting software. 
            Perfect for new interns at Glodinas Finance B.V.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center hover:bg-blue-50 transition-colors"
              onClick={() => document.getElementById('slides')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FaPlay className="mr-3" />
              Start Learning
            </button>
            <button 
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center hover:bg-green-600 transition-colors"
              onClick={handleDownloadPDF}
            >
              <FaDownload className="mr-3" />
              Download PDF
            </button>
          </div>
        </div>
      </header>

      {/* What You'll Learn Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This manual covers everything you need to know to start using Moneybird effectively in your daily work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {learningAreas.map((area, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${area.color}`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Slides Section */}
      <section id="slides" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Slides</h2>
            <p className="text-lg text-gray-600">Click on any slide to view the detailed content - now with advanced features!</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {slides.map((slide) => (
              <div 
                key={slide.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleSlideClick(slide.id)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 ${slide.color} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                      {slide.id}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{slide.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download PDF Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <FaDownload className="text-white text-3xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Training Manual</h3>
            <p className="text-gray-600 mb-6">
              All 15 slides compiled into a professional PDF document, including basic concepts and advanced features, 
              perfect for printing or offline study.
            </p>
            <button 
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center hover:bg-green-600 transition-colors"
              onClick={handleDownloadPDF}
            >
              <FaDownload className="mr-3" />
              Download PDF Manual
            </button>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8 text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <FaFileContract className="mr-2" />
                Print-friendly format
              </div>
              <div className="flex items-center justify-center">
                <FaDownload className="mr-2" />
                Offline accessibility
              </div>
              <div className="flex items-center justify-center">
                <FaLightbulb className="mr-2" />
                Professional layout
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold">Glodinas Finance B.V.</h3>
            <p className="text-gray-400">Professional Financial Services</p>
          </div>
          <div className="text-gray-400 text-sm">
            <p>📧 info@glodinasfinance.nl | 🌐 glodinasfinance.nl</p>
            <p className="mt-2">© 2025 Glodinas Finance B.V. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

