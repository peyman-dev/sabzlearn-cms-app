import React from "react";

export default function ProductImage({src, alt}) {
  return (
    <img
      src={src}
      className="size-full object-cover duration-150 hover:scale-110  transition-all rounded-lg"
      alt={alt}
    />
  );
}
