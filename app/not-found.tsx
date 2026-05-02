'use client';

import { Metadata } from 'next';
import css from './Not-Found.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
  openGraph: {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist or has been moved.',
    url: 'https://notehub.com/not-found',
    siteName: 'NoteHub',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub - Page Not Found',
      },
    ],
  },
  twitter: {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist or has been moved.',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/'), 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
      <p>You will be redirected to the main page in a few seconds . . . </p>
      <Link href="/">Go back home</Link>
    </div>
  );
};
export default NotFound;
