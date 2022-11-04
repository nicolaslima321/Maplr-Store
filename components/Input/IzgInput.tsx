import React from 'react';
import styles from '~/components/Input/IzgInput.module.scss';

interface props {
  placeholder: string,
  label: string,
  onChange?: () => void,
  onBlur?: () => void,
};

export const IzgInput: React.FC<props> = ({ placeholder, label, ...props }) => {
  return (
    <input
      className={styles['izg-input']}
      type="text"
      placeholder={placeholder}
      {...props}
    />
  );
};

IzgInput.defaultProps = {
  placeholder: 'Your place holder',
  onChange: undefined,
  onBlur: undefined,
};
