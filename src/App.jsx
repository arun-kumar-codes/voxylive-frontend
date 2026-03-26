import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6">

        {/* Logo / Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-purple-500">
          Voxylive
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          Live streaming platform where you can watch, chat, and send gifts in real-time.
        </p>

        {/* Button */}
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-medium">
          Get Started
        </button>

      </div>
    </div>
  );
}

export default App;