import clsx from "clsx";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menus = ({ menus }) => {
  console.log(menus);
  return (
    <div className="space-y-3 mt-6">
      {menus.map((menu) => (
        <div>
          <p className="text-xs text-gray-500 font-semibold">{menu.title}:</p>
          <div className="mt-2 *:w-full *:flex *:items-center *:gap-2 *:h-10 *:duration-150 *:hover:bg-gray-100 pr-2 *:px-3 *:rounded-md text-gray-700">
            {menu.items.map((nav) => 
            <NavLink to={nav.href} className={({isActive}) => clsx(isActive ? "primary-bg text-white border-transparent" : "border-transparent!") }>
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
