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
 

const InnerButton: React.FC<ButtonProps>  = (props: ButtonProps & {
  handleClick?: () => void;
}) => {
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
