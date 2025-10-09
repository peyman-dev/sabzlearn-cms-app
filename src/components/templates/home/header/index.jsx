import React from "react";
import SectionTitle from "../../../common/section-title";
import useToggle from "../../../../core/hooks/use-toggle";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isRedirecting, toggle] = useToggle();
  const navigateTo = useNavigate()

  const CTAButton = () => {
    const handleClick = () => {
        navigateTo('/products')
      toggle();
    };
    return (
      <button
        onClick={() => {
          handleClick();
          console.log("Redirected");
        }}
        className="primary-bg px-4 text-sm py-2 rounded-md cursor-pointer hover:opacity-90 text-white"
      >
        {isRedirecting ? "درحال انتقال" : "ایجاد محصول"}
      </button>
    );
  };

  return (
    <>
      <SectionTitle title={"داشبورد"} Buttons={<CTAButton />} />
    </>
  );
}
