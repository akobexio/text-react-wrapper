'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './Button.module.scss';
import { type ButtonProps } from '@bexio/react-wrappers/button';

// type ButtonProps1: ButtonProps = {
//   handleClick?: () => void;
//   variant?: 'primary' | 'secondary' | 'danger' | 'link';
//   disabled?: boolean;
//   children?: React.ReactNode;
// } & React.ButtonHTMLAttributes<HTMLButtonElement>;

interface customButtonProps extends React.PropsWithChildren<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  type?: ButtonType;
  href?: string;
  rel?: string;
  target?: string;
  download?: string;

  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  

  role?: string | null;
  // 'aria-label'?: string;
  // 'aria-labelledby'?: string;
  // 'aria-describedby'?: string;
  // 'aria-disabled'?: 'true' | 'false';
 };

 export interface Button2Props extends React.ComponentPropsWithoutRef<'button'>,  customButtonProps {
    handleClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    tabIndex?: number;
}

const InnerButton = (props: Button2Props) => {
  const [BxButton, setBxButton] = React.useState<any>(null);

  React.useEffect(() => {
    // Import only on client side
    import('@bexio/react-wrappers/button').then((mod) => {
      setBxButton(() => mod.Button);
    });
  }, []);

  if (!BxButton) return null; // or loading spinner

  return (
    <BxButton
      icon="gear"
      onClick={props.handleClick}
      disabled={props.disabled}
      variant={props.variant || 'primary'}
      {...props}
    >
      {props.children}
    </BxButton>
  );
};

const Button = dynamic(async () => Promise.resolve(InnerButton), { ssr: false });
export default Button;
