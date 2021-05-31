import React from 'react';
import styles from './Button.module.scss';

interface IButton {
  children: React.ReactNode;
  type?: any;
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
}

const Button: React.FC<IButton> = (props) => (
  <button
    className={`${styles.root} ${props.disabled ? styles.disabled : styles.active}`}
    type={props.type || undefined}
    onClick={props.onClick || undefined}
    disabled={props.disabled || undefined}
  >
    {props.children}
  </button>
)


export default Button
