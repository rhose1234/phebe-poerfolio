import React from 'react';

export default function Button({ href, children, onClick, className = '' }) {
  if (href) {
    return (
      <a
        href={href}
        className={`px-4 py-2 bg-purple text-white rounded hover:bg-transparent hover:border-2 hover:text-purple hover:border-purple transparent transition ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`px-12 py-3 bg-purple text-white rounded hover:bg-transparent hover:border-2 hover:text-purple hover:border-purple transition ${className}`}
    >
      {children}
    </button>
  );
}
