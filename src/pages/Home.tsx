import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, HardDrive, Shield, Users, BarChart, Server } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Dedicated CPUs',
    description: 'Get your own dedicated CPU resources for optimal performance',
  },
  {
    icon: <HardDrive className="h-6 w-6" />,
    title: 'Flexible Storage',
    description: 'Scale your storage as needed with our flexible options',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure Environment',
    description: 'Enterprise-grade security for your hosting environment',
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: 'Resource Monitoring',
    description: 'Real-time monitoring and analytics for your server',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Student Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'ServerHub made it possible for me to host my projects without breaking the bank. The dedicated resources are perfect for my needs.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The flexibility to scale resources as our startup grows has been invaluable. Excellent service at an affordable price.',
  },
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Affordable Hosting for
              <br />
              Your Next Big Project
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Dedicated servers, flexible storage, and complete control
              <br />
              Perfect for students, startups, and training centers
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/plans"
                className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                View Plans
              </Link>
              <Link
                to="/register"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 200L60 183.3C120 166.7 240 133.3 360 116.7C480 100 600 100 720 116.7C840 133.3 960 166.7 1080 166.7C1200 166.7 1320 133.3 1380 116.7L1440 100V200H1380C1320 200 1200 200 1080 200C960 200 840 200 720 200C600 200 480 200 360 200C240 200 120 200 60 200H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed for developers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied developers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join us today and take your projects to the next level
            </p>
            <Link
              to="/register"
              className="inline-block bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Create Your Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;