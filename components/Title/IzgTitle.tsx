import React from 'react';

interface props {
  text: string,
  variant: string,
};

export const IzgTitle: React.FC<props> = ({ text, variant, ...props }) => {

  const title = () => {
    switch (variant) {
      case 'h1':
        return <h1 {...props}>{text}</h1>;
      case 'h2':
        return <h2 {...props}>{text}</h2>;
      case 'h3':
        return <h3 {...props}>{text}</h3>;
      case 'h4':
        return <h4 {...props}>{text}</h4>;
      case 'h5':
        return <h5 {...props}>{text}</h5>;
      case 'h6':
      default:
        return <h6 {...props}>{text}</h6>;
    }
  }

  return (
    <>
      { title() }
    </>
  );
};
