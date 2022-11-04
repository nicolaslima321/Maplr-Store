import React from 'react';

interface props {
  text: string,
  variant: string,
};

export const IzgText: React.FC<props> = ({ text, variant, ...props }) => {
  const textElement = () => {
    switch (variant) {
      case 'strong':
        return <strong {...props}>{text}</strong>;
      case 'p':
        return <p {...props}>{text}</p>;
      case 'label':
      default:
        return <label {...props}>{text}</label>;
    }
  }

  return (
    <>
      { textElement() }
    </>
  );
};
