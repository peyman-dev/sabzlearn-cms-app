/* Developed in sabzlearn.ir  */
import React from "react";
import Sidebar from "./modules/sidebar";
import { Outlet } from "react-router-dom";
import Header from "./modules/header";

const ApplicationLayout = () => {
  return (
    <main id="root" className="flex ">
      <Sidebar />

      <section className="grow *:px-6">
        <Header />

        <div id="content" className="mt-6">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default ApplicationLayout;
/* Developed in sabzlearn.ir  */
