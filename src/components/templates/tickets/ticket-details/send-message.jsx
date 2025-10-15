import React from "react";
import { BsSend } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";

export default function SendMessage() {
  return (
    <div>
      <div className="w-full *:cursor-not-allowed relative h-12 flex items-center *:outline-none px-10 *:placeholder:text-sm! duration-150 focus-within:ring-4 ring-blue-500/50 rounded-full bg-white shadow">
        <input
          className="h-full absolutez-0  w-[100%]"
          placeholder="لطفا پیغام خود را وارد نمائید.."
          onFocus={(e) => e.target.blur()}
        />
        <button className="absolute z-10 left-2 cursor-pointer bg-blue-500 size-9 rounded-full flex-center text-white">
          <BsSend />
        </button>
      </div>
      <p className="text-xs text-yellow-500 mx-auto! rounded-md border border-yellow-400 flex items-center gap-2 max-w-max max-h-max bg-yellow-400/20 p-3 mt-2">
      <CgDanger />
        <span>در این نسخه امکان ارسال پیغام وجود ندارد</span>
      </p>
    </div>
  );
}
