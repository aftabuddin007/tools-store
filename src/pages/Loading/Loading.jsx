import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-3 text-sm text-gray-600 animate-pulse">Loading...</p>
    </div>
        </div>
    );
};

export default Loading;