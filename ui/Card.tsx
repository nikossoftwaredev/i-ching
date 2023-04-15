/* eslint-disable react/jsx-props-no-spreading */
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'default' | 'transparent';
}

const Card = (props: CardProps) => {
  const { className, children } = props;

  return (
    <div {...props} className={`rounded-xl shadow-md bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
