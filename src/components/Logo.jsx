import React from "react";
import PropTypes from "prop-types";
import { saleblinkLogo } from "../assets/images";

const Logo = () => {
  return (
    <div className="h-[64px] w-[150px]">
      <img src={saleblinkLogo} className="h-full w-full object-contain" alt="salesblink" />
    </div>
  );
};

Logo.propTypes = {};

export default Logo;
