import React from 'react';

export const Card = ({ children, style }) => (
  <div
    style={{
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginBottom: '10px',
      background: '#fff',
      ...style,
    }}
  >
    {children}
  </div>
);