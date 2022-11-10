import React from 'react';
import styles from '~/layouts/Header/Header.module.scss';

import { Paper } from '@mui/material';

import Image from 'next/image';

import { ProfileIcon } from '~/components/ProfileIcon';

export const Header: React.FC<{}> = () => {
  const imageProps = {
    alt: 'Maplr Syrup Store',
    src: '/maplr-logo-2.png',
    width: 100,
    height: 50,
  };

  return (
    <Paper
      className={styles['header']}
      elevation={1}
    >
      <Image {...imageProps}/>

      foo bar

      <ProfileIcon />
    </Paper>
  );
};
