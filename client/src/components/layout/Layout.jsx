import React from "react";
import Header from "../parts/Headers";
import Sidebar from "../parts/Sidebar";
import Footer from "../parts/Footer";

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}

export default Layout;
