import React from "react";
import useToggle from "../../core/hooks/use-toggle";
import clsx from "clsx";

export default function Dropdown({ Trigger, items }) {
  const [isOpen, toggle] = useToggle();

  return (
    <>
      <div className="relative max-w-max max-h-max">
        <div
          className="cursor-pointer select-none flex-center"
          onClick={toggle}
        >
          {<Trigger />}
        </div>
        <div
          className={clsx(
            "w-[180px] p-2 rounded-lg top-[120%] bg-white z-10 shadow transition-all  duration-150 border primary-border-color absolute",
            isOpen ? "visible" : "invisible opacity-0"
          )}
        >
          {items.map((item, i) => (
            <button key={i} className="flex items-center w-full! px-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 h-10 rounded-md duration-150 hover:bg-zinc-100/70 cursor-pointer">
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
