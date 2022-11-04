import React from 'react';
import styles from '~/components/Link/IzgLink.module.scss';

interface props {
  text: string,
};

export const IzgLink: React.FC<props> = ({ text, ...props }) => {
  return (
    <a
      className={styles['izg-link']}
      {...props}
    >
      { text }
    </a>
  );
};
