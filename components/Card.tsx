/* eslint-disable react/jsx-props-no-spreading */
import { FC, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  variant?: "primary" | "secondary" | "default" | "transparent";
}

const Card: FC<CardProps> = (props) => {
  const { className, children } = props;

  return (
    <div {...props} className={`rounded-xl shadow-md bg-base-200 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
