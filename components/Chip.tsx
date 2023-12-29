import { FC } from "react";

interface ChipProps {
  text: string;
}

const Chip: FC<ChipProps> = ({ text }: ChipProps) => (
  <div className="opacity-75 shadow-md grid select-none items-center whitespace-nowrap rounded-full bg-base-200 py-1.5 px-3 text-xs font-bold uppercase text-base-content border-base-content">
    <span>{text}</span>
  </div>
);

export default Chip;
