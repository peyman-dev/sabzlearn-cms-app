import React from "react";
import Sidebar from "./modules/sidebar";
import { Outlet } from "react-router-dom";
import Header from "./modules/header";

const ApplicationLayout = () => {
  return (
    <main id="root" className="flex ">
      <Sidebar />

      <section id="content" className="grow *:px-6">
        <Header />
        <Outlet />
      </section>
    </main>
  );
};

export default ApplicationLayout;
