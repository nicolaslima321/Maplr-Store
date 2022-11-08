import React from 'react';
import styles from '~/layouts/Header/Header.module.scss';

import Image from 'next/image';

export const Header: React.FC<{}> = () => {
  const imageProps = {
    alt: 'Maplr Syrup Store',
    src: '/maplr-logo-2.png',
    width: 100,
    height: 50,
  };

  return (
    <div
      className={styles['header']}
    >
      <Image {...imageProps}/>

      foo bar
    </div>
  );
};
