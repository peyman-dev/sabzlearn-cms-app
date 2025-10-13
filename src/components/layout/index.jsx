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

        <div id="content" className="mt-6 container mx-auto">
            <Outlet />
          <div class="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="fixed bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#eaf9e9,transparent)]"></div></div>
        </div>
      </section>
    </main>
  );
};

export default ApplicationLayout;
/* Developed in sabzlearn.ir  */
