import React from 'react';

export default function HomePage() {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center">
        <div className="mb-6">
          <div className="inline-block bg-purple-700 p-6 rounded-2xl">
            <span className="text-white text-6xl font-bold">D</span>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">digitalflake</h2>
        <p className="text-gray-600 text-lg">Welcome to Digitalflake admin</p>
      </div>
    </div>
  );
}