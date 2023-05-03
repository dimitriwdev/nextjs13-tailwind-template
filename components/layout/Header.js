import React from 'react';

import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex h-12 px-4 items-center justify-between shadow-md">
      <Link href="/" className="text-lg font-bold text-primary">
        Header
      </Link>
      <div>
        <Link href="/page1">Page 1</Link>
        <Link href="/page2" className="pl-3">
          Page 2
        </Link>
        <Link href="/page3" className="pl-3">
          Page3
        </Link>
      </div>
    </nav>
  );
}
