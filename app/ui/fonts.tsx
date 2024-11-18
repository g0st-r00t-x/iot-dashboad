import { Inter, Lusitana } from 'next/font/google';

/**
 * Inter font configuration
 * @see https://fonts.google.com/specimen/Inter
 */
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

/**
 * Lusitana font configuration
 * @see https://fonts.google.com/specimen/Lusitana
 */
export const lusitana = Lusitana({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});