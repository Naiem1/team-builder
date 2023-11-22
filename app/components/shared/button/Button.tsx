import { CSSProperties, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  type?: 'submit' | 'button';
  onClick?: () => void;
};

const Button = ({
  children,
  className,
  style,
  type = 'button',
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.Button} + ${className}`}
      style={style}
      onClick={onClick}
      role='button'
    >
      {children}
    </button>
  );
};

export default Button;
