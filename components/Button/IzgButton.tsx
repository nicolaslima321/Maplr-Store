import React from 'react';
import styles from '~/components/Button/IzgButton.module.scss';

interface Props {
  primary: boolean,
  label: string,
  onClick: () => void,
}

export const IzgButton: React.FC<Props> = ({ primary, label, onClick, ...props }) => {
  const mode = primary ? 'izg-button--primary' : 'izg-button--secondary';
  const className = [styles['izg-button'], styles[mode]].join(' ');

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

IzgButton.defaultProps = {
  primary: false,
  onClick: undefined,
};
