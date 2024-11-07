import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Student',
    price: '$15',
    description: 'Perfect for students and learning',
    features: [
      '1 CPU Core',
      '2GB RAM',
      '50GB Storage',
      'Basic Support',
      '1 Database',
      'Free SSL Certificate',
    ],
  },
  {
    name: 'Startup',
    price: '$29',
    description: 'Ideal for small projects and startups',
    features: [
      '2 CPU Cores',
      '4GB RAM',
      '100GB Storage',
      'Priority Support',
      '3 Databases',
      'Free SSL Certificate',
      'Daily Backups',
    ],
    popular: true,
  },
  {
    name: 'Business',
    price: '$49',
    description: 'For growing businesses and teams',
    features: [
      '4 CPU Cores',
      '8GB RAM',
      '200GB Storage',
      '24/7 Support',
      'Unlimited Databases',
      'Free SSL Certificate',
      'Hourly Backups',
      'Custom Domain',
    ],
  },
];

const Plans = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs. All plans include automatic updates and backups.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
                plan.popular ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              <div className="p-6 bg-white rounded-t-lg">
                {plan.popular && (
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600 mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <button
                  className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  }`}
                >
                  Get Started
                </button>
              </div>
              <div className="px-6 pt-6 pb-8 bg-white rounded-b-lg">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Need a custom plan?</h3>
          <p className="mt-4 text-lg text-gray-600">
            Contact us for custom requirements. We'll help you find the perfect solution.
          </p>
          <button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;