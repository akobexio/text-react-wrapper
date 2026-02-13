/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, {useRef} from 'react';
import dynamic from 'next/dynamic';

import { ButtonProps } from '@bexio/react-wrappers/button';

 

const InnerButton = (props: ButtonProps & {
  handleClick?: React.MouseEventHandler;
  form?: string;
}) => {
  const ref = useRef<HTMLElement>(null);
  const [BxButton, setBxButton] = React.useState<any>(null);
  const { handleClick, onClick,  ...rest } = props;

  React.useEffect(() => {
    // Imports only on client side, no ssr
    import('@bexio/react-wrappers/button').then((mod) => {
      setBxButton(() => mod.Button);
    });
  }, []);

  if (!BxButton) return null;

  return (
    <BxButton
      ref={ref} 
      class={rest.className}
      onClick={(e) => {
        // eslint-disable-next-line no-console
        console.log('Button clicked', e);
        handleClick ? handleClick(e) : onClick?.(e);
      }}
      {...(rest.form ? { form: rest.form } : {})}
      {...(rest.variant ? { variant: rest.variant } : {})}
      {...(rest.size ? { size: rest.size } : {})}
      {...(rest.disabled ? { disabled: rest.disabled } : {})}
      {...(rest.loading ? { loading: rest.loading } : {})}
      {...(rest.type ? { type: rest.type } : {})}
      {...(rest.form ? { form: rest.form } : {})}
      {...rest}
    >
   {rest.form} {props.children}
    </BxButton>
  );
};

const BxButton = dynamic(async () => Promise.resolve(InnerButton), {
  ssr: false
});

export default BxButton;