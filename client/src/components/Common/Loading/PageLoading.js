"use client";

import Image from 'next/image';

export default function PageLoading() {
  return (
    <div role="status" aria-live="polite" className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity duration-300">
      <Image
        src="/logo.jpeg"
        alt="Loading"
        width={56}
        height={70}
        className="animate-bounce mb-4 drop-shadow rounded-full border-2 border-blue-200"
        priority
      />
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
      <span className="text-blue-900 font-semibold text-base animate-pulse">Loading...</span>
    </div>
  );
}
