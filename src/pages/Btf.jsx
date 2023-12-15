import React from "react";
import "./btf.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";

const Btf = () => {
  const location = useLocation();

  return (
    <>
      <Sidebar />
      <div className="root__window">
        {location.pathname !== "/" && <Header title={location.pathname} />}
        <Outlet />
        <Footer />
      </div>
      {/* </Sidebar> */}
    </>
  );
};

export default Btf;
