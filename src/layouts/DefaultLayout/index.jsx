import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

// import { Container } from './styles';

function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
