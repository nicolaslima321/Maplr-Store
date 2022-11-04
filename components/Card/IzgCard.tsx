import React, { ReactNode } from 'react';
import styles from '~/components/Card/IzgCard.module.scss';

interface props {
  borderless?: boolean,
  hoverless?: boolean,
  children: ReactNode,
  onClick?: () => void,
}

export const IzgCard: React.FC<props> = ({ borderless, hoverless, children, ...props }) => {
  const isClickable = typeof props.onClick === 'function';

  const izgCardClass = () => {
    let izgCardClasses = styles['izg-card'];

    if (isClickable) {
      izgCardClasses += ' ' + styles['izg-card--clickable'];
    }

    if (hoverless) {
      izgCardClasses += ' ' + styles['izg-card--hoverless'];
    }

    if (borderless) {
      izgCardClasses += ' ' + styles['izg-card--borderless'];
    }

    return izgCardClasses;
  };

  return (
    <div
      className={izgCardClass()}
      {...props}
    >
      { children }
    </div>
  );
};

IzgCard.defaultProps = {
  borderless: false,
  hoverless: false,
  children: 'foo bar',
  onClick: undefined,
};
