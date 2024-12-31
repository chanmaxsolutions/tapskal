import { generalSans } from './fonts';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tapskal - Digital Marketing Agency',
  description: 'Web Development, Performance Marketing, SEO, AI Chatbot & AI Agent Building Services',
  icons: {
    icon: 'https://res.cloudinary.com/dqeujzydw/image/upload/v1735628159/Tapskal-Favicon_s32ijx.svg',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dqeujzydw/image/upload/v1735628159/Tapskal-Favicon_s32ijx.svg" />
      </head>
      <body 
        className={`${generalSans.variable} font-sans bg-light text-dark`}
        suppressHydrationWarning
      >
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}