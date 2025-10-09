import clsx from "clsx";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menus = ({ menus }) => {
  return (
    <div className="space-y-3 mt-6">
      {menus.map((menu) => (
        <div>
          <p className="text-xs text-gray-500 font-semibold">{menu.title}:</p>
          <div className="mt-2 *:w-full *:flex *:items-center *:gap-2 *:h-10 *:duration-150 *:hover:bg-gray-100 space-y-1  *:px-3 *:rounded-md text-gray-700">
            {menu.items.map((nav) => 
            <NavLink to={nav.href} className={({isActive}) => clsx(isActive ? "relative before:absolute before:w-1 before:h-full before:rounded-l-full before:primary-bg before:-right-6 *:[svg]:text-teal-600! before:border-none! bg-zinc-100/60" : "border-transparent!") }>
              {({isActive}) => {
                console.log(isActive)
              }}
                {<nav.Icon />}
                <span>
                    {nav.title}
                </span>
            </NavLink>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menus;
