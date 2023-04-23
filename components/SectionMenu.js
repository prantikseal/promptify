import React from 'react';

const SectionMenu = () => {
  return (
    <div className="flex flex-wrap max-w-6xl mx-auto px-4 mt-4 md:flex-col">
      <button className="border-4 border-gray-400 rounded-lg px-4 py-2 mr-2 hover:bg-pink-400">
        🔥 Marketing
      </button>
      <button className="border-4 border-gray-400 rounded-lg px-4 py-2 mr-2 hover:bg-pink-400">
        💼 Business
      </button>
      <button className="border-4 border-gray-400 rounded-lg px-4 py-2 mr-2 hover:bg-pink-400">
        🔍 SEO
      </button>
      <button className="border-4 border-gray-400 rounded-lg px-4 py-2 mr-2 hover:bg-pink-400">
      📝CopyWriting
      </button>
      <button className="border-4 border-gray-400 rounded-lg px-4 py-2 mr-2 hover:bg-pink-400">
      📧Email Templates
      </button>
      <button className="border-4 border-gray-400 rounded-lg px-4 py-2 mr-2 hover:bg-pink-400">
        ✍️ Writing
      </button>
    </div>
  );
};

export default SectionMenu;
