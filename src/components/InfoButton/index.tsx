import clsx from "clsx";
import React, { useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";

interface IInfoButtonProps {
  className?: string;
  size?: number;
  text: string;
  title?: string;
  icon?: React.ReactNode;
}

export const InfoButton = ({ className, size, text, title, icon }: IInfoButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className={clsx(
          { block: isHovered, hidden: !isHovered },
          "relative bottom-3 z-10 max-w-xs bg-neutral-100 text-neutral-800 p-3 rounded-lg shadow-lg whitespace-pre-wrap break-words overflow-hidden text-justify border"
        )}
      >
        <h3 className="flex w-full items-center justify-center font-bold uppercase border-b pb-2 mb-4">{icon}{title}</h3>
        <p>{text}</p>
      </div>
      <i
        className="cursor-pointer rounded-full"
        onClick={() => setIsHovered(!isHovered)}
      >
        <FaCircleInfo size={size} color="rgb(12, 50, 111)" className="" />
      </i>
    </div>
  );
};