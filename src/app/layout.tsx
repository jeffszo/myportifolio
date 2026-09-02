/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Metadata } from "next";
import { Exo } from 'next/font/google'
// @ts-ignore
import "./globals.css";
import { LanguageProvider } from './context/LanguageContext';


const exo = Exo({ subsets: ['latin'] })

const siteUrl = 'https://jefersonferreira.vercel.app';
const title = 'Jeferson Ferreira | Full Stack Developer';
const description =
  'Full Stack Developer especializado em React, Next.js, TypeScript, Node.js e Supabase. Interfaces modernas de ponta a ponta, com APIs, banco de dados e autenticação.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Jeferson Ferreira',
  },
  description,
  keywords: [
    'Jeferson Ferreira',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
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
    <html lang="pt-br" >
      <body className={exo.className}>
               <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
