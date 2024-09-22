import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'accent';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  const baseClasses = 'rounded-lg text-white px-4 py-2 transition duration-300';

  const variantClasses =
    variant === 'primary' ? 'bg-secondary hover:bg-pink-600' : 'bg-accent hover:bg-cyan-600';

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
