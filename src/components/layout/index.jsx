/* Developed in sabzlearn.ir  */
import React from "react";
import Sidebar from "./modules/sidebar";
import { Outlet } from "react-router-dom";
import Header from "./modules/header";
import BackgroundOverlay from "../ui/background";

const ApplicationLayout = () => {
  return (
    <main id="root" className="flex">
      <Sidebar />

      <section className="grow *:px-6">
        <Header />

        <div id="content" className="mt-6 container mx-auto">
          <div className="relative z-10">
            <Outlet />
          </div>

          <BackgroundOverlay />
        </div>
      </section>
    </main>
  );
};

export default ApplicationLayout;
/* Developed in sabzlearn.ir  */
