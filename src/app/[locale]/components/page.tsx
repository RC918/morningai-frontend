'use client';

import React from 'react';

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">UI Components Library</h1>
      
      <div className="space-y-12">
        {/* Basic Components */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Basic Components</h2>
          
          {/* Button Component */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Button Component</h3>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Primary Button
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                Secondary Button
              </button>
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                Outline Button
              </button>
            </div>
          </div>

          {/* Input Component */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Input Component</h3>
            <div className="space-y-4 max-w-md">
              <input 
                type="text" 
                placeholder="Basic Input"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Email Input"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Select Component */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Select Component</h3>
            <select className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Choose an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          {/* Textarea Component */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Textarea Component</h3>
            <textarea 
              placeholder="Enter your message..."
              rows={4}
              className="w-full max-w-md px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Checkbox Component */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Checkbox Component</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Option 1</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Option 2</span>
              </label>
            </div>
          </div>

          {/* Radio Component */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Radio Component</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="radio-group" className="mr-2" />
                <span>Choice 1</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="radio-group" className="mr-2" />
                <span>Choice 2</span>
              </label>
            </div>
          </div>

          {/* Switch Component */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Switch Component</h3>
            <label className="flex items-center">
              <input type="checkbox" className="sr-only" />
              <div className="relative">
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
              <span className="ml-3">Toggle Switch</span>
            </label>
          </div>

          {/* Loading Component */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Loading Component</h3>
            <div className="flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span>Loading...</span>
            </div>
          </div>
        </section>

        {/* Advanced Components */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Advanced Components</h2>
          
          {/* Modal Component */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Modal Component</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Open Modal
            </button>
          </div>

          {/* Toast Component */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Toast Component</h3>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Show Toast
            </button>
          </div>

          {/* Tooltip Component */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Tooltip Component</h3>
            <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700" title="This is a tooltip">
              Hover for Tooltip
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
