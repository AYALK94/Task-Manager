import React from 'react';

export const Input = ({ value, onChange, placeholder, style }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    style={{
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
      marginBottom: '10px',
      ...style,
    }}
  />
);