import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex gap-[50px] justify-center bg-[#f4f4f4] px-[20px] py-[15px]">
        <Link className="hover:text-red-600 text-[14px] " to="/">
         HOME
        </Link>

        <Link to="/jewelery" className="hover:text-red-600 text-[14px]">
          JEWELLERY
        </Link>

        <Link to="/electronics" className="hover:text-red-600 text-[14px]">
          ELECTRONICS
        </Link>

        <Link to="/mensclothing" className="hover:text-red-600 text-[14px]">
          MEN'S CLOTHING
        </Link>

        <Link to="/womensclothing" className="hover:text-red-600 text-[14px]">
          WOMEN'S CLOTHING
        </Link>
      </div>
    </>
  );
};

export default Layout;
