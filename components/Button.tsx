/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  variant?: 'primary' | 'neutral' | 'secondary' | 'accent' | 'ghost' | 'link';
  outlined?: boolean;
}

const Button = (props: ButtonProps) => {
  const { className, children, loading = false, variant, outlined = true } = props;

  return (
    <button
      type='button'
      {...props}
      className={`btn btn-${variant} ${outlined ? 'btn-outline' : 'btn-active'} ${className}`}
    >
      {loading ? (
        <>
          <span className='loading loading-spinner'></span>
          LOADING
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
