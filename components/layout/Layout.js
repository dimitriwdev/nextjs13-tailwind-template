import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const title = 'main';
  const description = 'description';
  return (
    <>
      <Head>
        <title>{title ? `${title} - Brand` : 'Brand'}</title>
        {description && <meta name="description" content={description}></meta>}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main className="container m-auto mt-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}
