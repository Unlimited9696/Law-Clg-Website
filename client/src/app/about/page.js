"use client"
import React, { useEffect } from 'react'
import AboutCard from '@/components/About/AboutCard'

// ==================== About Page ====================
export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [])

  // ==================== Return ====================
  return (
    <main className="relative isolate px-2 min-h-screen">
      <section className="mx-auto max-w-4xl py-2 pt-8 lg:py-24">
        <div className="text-center">
          <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 md:text-4xl">
            "Committed to Excellence in Legal Education and Social Justice"
          </h1>
          <p className="mt-6 text-md sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
            Affiliated with Savitribai Phule Pune University and recognized by the Bar Council of India,
            SSNLC is dedicated to nurturing legal professionals with strong ethical foundations.
          </p>
        </div>
      </section>
      <AboutCard />
    </main>
  )
}