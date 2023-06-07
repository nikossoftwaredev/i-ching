/* eslint-disable react/jsx-props-no-spreading */
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "default" | "transparent";
  className?: string;
  outlined?: boolean;
}

const ButtonLink = (props: ButtonProps) => {
  const { className, children, href } = props;

  return (
    <Link href={href} className={`btn btn-outline ${className}`}>
      {children}
    </Link>
  );
};

export default ButtonLink;
