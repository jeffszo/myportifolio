import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { LanguageProvider } from './context/LanguageContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const siteUrl = 'https://jefersonferreira.vercel.app';
const title = 'Jeferson Ferreira | Software Engineer';
const description =
  'Software Engineer especializado em React, Next.js, TypeScript, Node.js, Java e Supabase. Interfaces modernas de ponta a ponta, com APIs, banco de dados e autenticação.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Jeferson Ferreira',
  },
  description,
  keywords: [
    'Jeferson Ferreira',
    'Software Engineer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Java',
    'Supabase',
    'Desenvolvedor Full Stack',
  ],
  authors: [{ name: 'Jeferson Ferreira', url: siteUrl }],
  creator: 'Jeferson Ferreira',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    siteName: 'Jeferson Ferreira',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
