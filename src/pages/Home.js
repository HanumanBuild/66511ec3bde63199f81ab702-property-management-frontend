import React from 'react';

export default function Home() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Property Management Company</h2>
        <p className="text-lg mb-4">We offer comprehensive property management services to ensure your properties are well-maintained and profitable.</p>
        <p className="text-lg font-bold text-green-600">Our service is available 24/7!</p>
      </div>
    </div>
  );
}