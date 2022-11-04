import React from 'react';
import styles from '~/components/Checkbox/IzgCheckbox.module.scss';

interface props {
  id: string,
  name: string,
  text?: string,
  value: string | number,
};

export const IzgCheckbox: React.FC<props> = ({ id, name, text, value, ...props }) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        {...props}
      />

      { Boolean(text) && (
        <label
          className={styles['izg-checkbox__text']}
          htmlFor={id}
        >
          { text }
        </label>
      ) }
    </>
  );
};

IzgCheckbox.defaultProps = {};
