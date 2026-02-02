"use client";

import React, { forwardRef, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ButtonProps } from '@bexio/react-wrappers';

// 1. Define the props interface (if not already done)
interface BxButtonProps extends ButtonProps {
  // Add any specific props your wrapper component needs
  handleClick?: React.MouseEventHandler<HTMLElement>;
  form?: string;
  className?: string;
  children?: React.ReactNode;
}

// 2. Dynamically import the Lit-wrapped Button component
// The 'Button' is loaded from the @bexio/react-wrappers package.
const DynamicBxButton = dynamic(
  () => import('@bexio/react-wrappers/button').then((mod) => mod.Button),
  {
    ssr: false, // CRITICAL: Ensures no SSR occurs for this component
    loading: () => <button disabled>Loading...</button>, // Optional loading state
  }
);

// 3. Create the main wrapper component using forwardRef
const BxButton = forwardRef<HTMLElement, BxButtonProps>(
  (props, ref) => {
    const { handleClick, onClick, children, className, ...rest } = props;
    
    // Combine the custom handleClick with the standard onClick prop
    const combinedClickHandler = handleClick ?? onClick;

    // We use DynamicBxButton, which is now a clean, deferred React component.
    return (
      <DynamicBxButton
        ref={ref} 
        // Use 'className' prop directly for clean CSS application
        className={className} 
        
        // Pass the combined handler
        onClick={combinedClickHandler}
        
        // Spread all remaining props automatically
        {...rest}
      >
        {children}
      </DynamicBxButton>
    );
  }
);

// Assign a display name for easier debugging
BxButton.displayName = 'BxButton';

export default BxButton;