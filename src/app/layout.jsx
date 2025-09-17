import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'OfficesByMav – Premium Office Spaces, Coworking & Real Estate Solutions',
  description:
    'OfficesByMav helps businesses find premium office spaces, coworking hubs, and serviced offices in prime locations. From flexible desks to full corporate setups, we deliver real estate office solutions tailored to your needs.',
  // keywords: [
  //   'office space for rent',
  //   'coworking space',
  //   'serviced office',
  //   'commercial real estate',
  //   'business centers',
  //   'shared office spaces',
  //   'corporate office leasing',
  //   'startup office solutions',
  //   'flexible office space',
  //   'managed office services',
  //   'coworking real estate',
  //   'office space India',
  //   'office space Delhi NCR',
  //   'office space Delhi',
  //   'office space UAE',
  //   'office space Dubai',
  //   'office space Sharjah',
  //   'office space USA',
  //   'office space California',
  //   'office space New York',
  //   'office rentals',
  //   'prime commercial offices',
  //   'virtual office with address',
  //   'meeting rooms for rent',
  //   'business real estate solutions',
  //   'custom office setup'
  // ],

  keywords: [
    'office space for rent',
    'coworking space',
    'serviced office',
    'commercial real estate',
    'business centers',
    'shared office spaces',
    'corporate office leasing',
    'startup office solutions',
    'flexible office space',
    'managed office services',
    'coworking real estate',
    'office rentals',
    'prime commercial offices',
    'virtual office with address',
    'meeting rooms for rent',
    'business real estate solutions',
    'custom office setup',

    // Real estate + commercial
    'real estate',
    'commercial real estate',
    'real estate office spaces',
    'office real estate',
    'commercial property for offices',
    'corporate real estate',
    'commercial real estate leasing',
    'business real estate',

    // Office / workspace services
    'office space for rent',
    'coworking space',
    'serviced office',
    'shared office spaces',
    'business centers',
    'corporate office leasing',
    'office leasing',
    'startup office solutions',
    'flexible office space',
    'managed office services',
    'custom office setup',
    'office rentals',
    'virtual office with address',
    'meeting rooms for rent',
    'premium office space',
    'prime commercial offices',
    'office space listings',

    // India – Major cities / real estate terms
    'office space India',
    'office space Delhi NCR',
    'office space Delhi',
    'commercial real estate Delhi',
    'real estate Delhi NCR',
    'office space Gurgaon',
    'office space Noida',
    'office space Mumbai',
    'office space Bangalore',
    'office space Hyderabad',
    'office space Pune',
    'coworking space Delhi',

    // UAE – Emirates
    'office space UAE',
    'office space Dubai',
    'office space Sharjah',
    'office space Abu Dhabi',
    'office real estate Dubai',
    'serviced office UAE',

    // USA – Key markets
    'office space USA',
    'office space New York',
    'office space California',
    'office space Texas',
    'office real estate New York',
    'coworking space USA',

    // Global / scaling
    'international office spaces',
    'global coworking solutions',
    'business real estate solutions',
    'commercial office listings'
  ],
  openGraph: {
    title: 'OfficesByMav – Office Spaces & Real Estate Solutions',
    description:
      'Find premium office spaces, coworking hubs, and serviced offices with OfficesByMav. Tailored business real estate solutions for startups, SMEs, and enterprises.',
    images: [
      {
        url: '/logo-white.png',
        width: 1200,
        height: 630,
        alt: 'OfficesByMav – Office Spaces & Coworking Solutions',
      },
    ],
    url: 'https://officesbymav.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OfficesByMav – Premium Office Spaces Worldwide',
    description:
      'Flexible coworking, serviced offices & commercial real estate solutions for businesses. Explore OfficesByMav office spaces across India, UAE, USA & beyond.',
    images: ['/logo-white.png'],
  },
  alternates: {
    canonical: 'https://officesbymav.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
