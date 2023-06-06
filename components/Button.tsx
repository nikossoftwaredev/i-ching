/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'default' | 'transparent';
}

const variantStyles = {
  primary: 'bg-bgPrimary text-white hover:bg-black',
  secondary: 'bg-white hover:bg-bgPrimary text-bgPrimary',
  default: 'bg-white hover:bg-bgPrimary text-bgPrimary',
  transparent: 'bg-white hover:bg-bgPrimary text-bgPrimary'
};
const Button = (props: ButtonProps) => {
  const { className, children, loading = false, variant = 'primary' } = props;

  return (
    <button
      type='submit'
      {...props}
      className={`inline-flex items-center justify-center px-4 py-3 border rounded-md font-semibold transition ease-in-out duration-150 hover:bg-black ${
        loading && 'opacity-25'
      } ${className} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
