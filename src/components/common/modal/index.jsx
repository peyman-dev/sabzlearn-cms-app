import React, { isValidElement } from "react";
import useToggle from "../../../core/hooks/use-toggle";
import clsx from "clsx";
import { BiX } from "react-icons/bi";
import Shortcuts from "./fragments/shortcuts";
import "./modules/close-modal";

export default function Modal({
  Trigger,
  children,
  title,
  FooterButtons,
  onSubmit,
  onCancel,
  isOpen: controlledIsOpen,
  onToggle: controlledOnToggle,
}) {
  const [internalIsOpen, internalToggle] = useToggle();
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const toggle = controlledOnToggle || internalToggle;
  const disableClick = (e) => e.stopPropagation();

  const hasExternalFooter = isValidElement(FooterButtons?.());

  return (
    <>
      <div className="min-w-max min-h-max cursor-pointer" onClick={toggle}>
        {Trigger}
      </div>
      <div
        id="modal-screen"
        className={clsx(
          "w-dvw h-dvh right-0 top-0 fixed z-10 bg-black/30 flex-center duration-300",
          isOpen ? "" : "invisible opacity-0"
        )}
        onClick={toggle}
      >
        <div
          onClick={disableClick}
          className="w-[500px] rounded-lg overflow-hidden bg-white drop-shadow-2xl/30"
        >
          <div className="flex items-center justify-between px-4 h-16">
            <span className="text-[17px] text-zinc-800 font-bold">{title}</span>
            <button
              onClick={toggle}
              className="text-2xl! text-zinc-500 cursor-pointer"
            >
              <BiX />
            </button>
          </div>
          <div
            id="modal-content"
            className="p-4 py-10 border-y primary-border-color"
          >
            {children}
          </div>
          <div className="min-h-14 flex items-center justify-end gap-2 px-4 bg-[#F6F8FA]">
            {hasExternalFooter ? (
              <FooterButtons />
            ) : (
              <Shortcuts onClose={onCancel || toggle} onSubmit={onSubmit} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
