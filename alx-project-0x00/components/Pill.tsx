import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="bg-gray-200 px-2 py-1 rounded-full text-sm font-medium">
      {title}
    </div>
  );
};

export default Pill;