import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Common/Footer/Footer";
import Navbar from "@/components/Common/NavBar/NavBar";
import NextTopLoader from 'nextjs-toploader';
import Script from 'next/script';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  preload: true,
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: true,
  variable: '--font-inter',
  timeout: 5000,
});

export const metadata = {
  title: 'SSNLC - Shri Shivajirao Nagawade Law College',
  description: 'Official website of Shri Shivajirao Nagawade Law College. Explore academics, events, faculty, and more.',
  generator: 'Next.js',
  applicationName: 'SSNLC',
  referrer: 'origin-when-cross-origin',
  keywords: 'Law College, SSNLC, Academics, Events, Faculty, Shrigonda, Education, Legal Education, Maharashtra Law College, Best Law College in Maharashtra',
  metadataBase: new URL('https://ssnlc.in'),
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: true,
    url: false,
  },
  alternates: {
    canonical: 'https://ssnlc.in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=FWUIogef4ycBJUm404SHD0gxt27xmnYQSzAiVwrVKQc',
  },
  icons: {
    icon: [
      { url: '/collagelogonew.png', sizes: '32x32', type: 'image/png' },
      { url: '/collegelogonew.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/collagelogonew.png',
    apple: '/collagelogonew.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/collagelogonew.png',
    },
  },
  openGraph: {
    title: 'SSNLC - Shri Shivajirao Nagawade Law College',
    description: 'Official website of Shri Shivajirao Nagawade Law College. Explore academics, events, faculty, and more.',
    url: 'https://ssnlc.in',
    siteName: 'SSNLC',
    images: [   
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SSNLC Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ssnlc',
    title: 'SSNLC - Shri Shivajirao Nagawade Law College',
    description: 'Official website of Shri Shivajirao Nagawade Law College. Explore academics, events, faculty, and more.',
    image: '/images/og-image.jpg',
  },
}

export const viewport = {
  themeColor: '#431d7a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#431d7a" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
        <link rel="apple-touch-startup-image" href="/images/splash.png" />
        
        {/* Structured Data for Rich Search Results */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Shri Shivajirao Nagawade Law College",
              "alternateName": "SSNLC",
              "url": "https://ssnlc.in",
              "logo": "https://ssnlc.in/collegelogonew.png",
              "sameAs": [
                "https://www.facebook.com/ssnlc",
                "https://twitter.com/ssnlc",
                "https://www.instagram.com/ssnlc"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shrigonda",
                "addressLocality": "Ahmednagar",
                "addressRegion": "Maharashtra",
                "postalCode": "413701",
                "addressCountry": "IN"
              },
              "telephone": "+91-123-456-7890",
              "email": "info@ssnlc.in",
              "description": "Shri Shivajirao Nagawade Law College offers comprehensive legal education programs with a focus on practical skills and ethical values.",
              "foundingDate": "2010",
              "areaServed": "Maharashtra",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Academic Programs",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "LL.B. (3 Years)",
                      "description": "Bachelor of Law - 3 Year Program"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "B.A. LL.B. (5 Years)",
                      "description": "Integrated Bachelor of Arts and Bachelor of Law - 5 Year Program"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D63Y10CBBS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D63Y10CBBS');
          `}
        </Script>
      </head>
      <body className={`${inter.className} font-[Inter,_Inter_Fallback,_system-ui,_sans-serif] min-h-screen antialiased`}>
        <div className="h-screen w-full fixed top-0 left-0 -z-50 bg-gradient-to-b from-white to-blue-100"></div>
        <NextTopLoader 
          color="#431d7a"
          initialPosition={0.08}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <Navbar />
        <main className="min-h-screen overflow-x-hidden mt-2">
          {children}
        </main>
        <Footer />
        
        {/* Service Worker Registration */}
        <Script id="service-worker" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('Service Worker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('Service Worker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
