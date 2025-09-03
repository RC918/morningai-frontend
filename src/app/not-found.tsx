'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Report 404 errors to Sentry
    Sentry.captureMessage('404 Page Not Found', 'warning');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="mb-4">
          <h1 className="text-6xl font-bold text-gray-300">404</h1>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

