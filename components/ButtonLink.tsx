/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'default' | 'transparent';
  className?: string;
  outlined?: boolean;
}

const ButtonLink = (props: ButtonProps) => {
  const { className, children, loading = false, variant = 'primary', href } = props;

  return (
    <Link href={href} className={`btn btn-outline ${className}`}>
      {children}
    </Link>
  );
};

export default ButtonLink;
