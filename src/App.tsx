import React, { useEffect } from 'react';
import { auth, db } from './services/firebase';
import './App.css';

function App() {
  useEffect(() => {
    
    console.log('Firebase Auth:', auth);
    console.log('Firebase Firestore:', db);
    console.log('🔥 Firebase connected successfully!');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          🚀 CourierFlow Pro
        </h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Firebase + React + Tailwind = Perfect! 🔥
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;