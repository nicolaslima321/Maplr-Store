import React from 'react';
import styles from '~/components/Radio/IzgRadio.module.scss';

interface props {
  id: string,
  name: string,
  text?: string,
  value: string | number,
};

export const IzgRadio: React.FC<props> = ({ id, name, text, value, ...props }) => {
  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        {...props}
      />

      { Boolean(text) && (
        <label
          className={styles['izg-radio__text']}
          htmlFor={id}
        >
          { text }
        </label>
      ) }
    </>
  );
};
