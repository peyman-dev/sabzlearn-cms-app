import clsx from "clsx";
import React from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function PublishmentState({ isVisible }) {
  return (
    <div
      className={clsx("badge", isVisible ? "success-badge" : "danger-badge")}
    >
      {isVisible ? (
        <>
          <BsEye />
          منشتر شده
        </>
      ) : (
        <>
          <BsEyeSlash />
          مخفی شده
        </>
      )}
    </div>
  );
}
