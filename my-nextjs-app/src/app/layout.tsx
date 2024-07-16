// src/layouts/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import { Html } from 'next/document';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <html>
      <Head>
        <title>Your Page Title</title>
        {/* Add any other meta tags, link tags, etc. */}
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      </html>
    </>
  );
};

export default Layout;
