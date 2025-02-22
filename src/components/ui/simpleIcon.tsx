import React from "react";

export default function SimpleIcon({
  path,
  color,
  className,
  imageUrl,
}: {
  path: string;
  color: string;
  className?: string;
  imageUrl?: string;
}) {
  if (imageUrl) {
    return <img src={imageUrl} alt="Custom Icon" className={className} />;
  }

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill={color}
    >
      <path d={path} />
    </svg>
  );
}
