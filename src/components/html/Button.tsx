import React from 'react';

type ButtonProps = {
    variant: 'primary' | 'secondary',
    children: string
}& Omit<React.ComponentProps<'button'>, 'children'>;  // Omit is used to exclude children from button props

const Button = ({variant, children, ...props}: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...props}>{children}</button>
  );
}

export default Button;