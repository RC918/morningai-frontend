'use client';

import { useTranslations } from 'next-intl';
import * as Sentry from '@sentry/nextjs';

export default function SentryTestPage() {
  const t = useTranslations('common');

  const triggerError = () => {
    throw new Error('Sentry test error - This is a test error for Sentry integration verification');
  };

  const triggerSentryError = () => {
    Sentry.captureException(new Error('Manual Sentry test error - Triggered via Sentry.captureException'));
  };

  const triggerConsoleError = () => {
    console.error('Console error test - This should be captured by Sentry');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sentry Error Testing</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Test 1: JavaScript Error</h2>
          <p className="text-gray-600 mb-4">
            This will throw a JavaScript error that should be automatically captured by Sentry.
          </p>
          <button
            onClick={triggerError}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Trigger JavaScript Error
          </button>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Test 2: Manual Sentry Error</h2>
          <p className="text-gray-600 mb-4">
            This will manually send an error to Sentry using Sentry.captureException().
          </p>
          <button
            onClick={triggerSentryError}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Trigger Manual Sentry Error
          </button>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Test 3: Console Error</h2>
          <p className="text-gray-600 mb-4">
            This will log an error to console that should be captured by Sentry.
          </p>
          <button
            onClick={triggerConsoleError}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Trigger Console Error
          </button>
        </div>

        <div className="p-4 border rounded-lg bg-blue-50">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Click each button to trigger different types of errors</li>
            <li>Check the browser console for error messages</li>
            <li>Verify that errors appear in the Sentry Dashboard</li>
            <li>Take screenshots of the Sentry Dashboard showing the captured errors</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

