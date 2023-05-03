import React from 'react';

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="flex h-10 justify-center items-center shadow-inner text-sm">
      Copyright &copy; {year} Footer
    </div>
  );
}
