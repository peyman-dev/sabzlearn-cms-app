import React from "react";
import SidebarHeader from "./fragments/header";
import Menus from "./fragments/menus";
import { menus } from "./settings";

export default function Sidebar() {
  return (
    <aside className="w-[272px] min-h-screen sticky top-0 border-l primary-border-color p-6">
      <SidebarHeader />
      <Menus menus={menus} />
    </aside>
  );
}
