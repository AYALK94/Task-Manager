import React from 'react';

export const Button = ({ children, onClick, style }) => (
  <button
    onClick={onClick}
    style={{
      padding: '10px 20px',
      background: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      ...style,
    }}
  >
    {children}
  </button>
);