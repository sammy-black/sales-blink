import React from "react";
import PropTypes from "prop-types";
import { LuUser2 } from "react-icons/lu";
import { IoIosLogIn, IoIosNotificationsOutline } from "react-icons/io";
import { BiUser } from "react-icons/bi";

import Logo from "../Logo";
import { Dropdown, IconButton } from "rsuite";

const ProfileMenu = (props) => (
  <div {...props} className="flex items-center space-x-2 cursor-pointer">
    <LuUser2 size={20} />
    <p className="subtitle1">Ogunniyi Samuel</p>
  </div>
);
const Navbar = () => {
  return (
    <div className="w-full box-border">
      <div className="w-full flex flex-row justify-between px-5 items-center">
        <Logo />

        <div className="flex flex-row space-x-2 items-center">
          <IconButton
            circle
            appearance="subtle"
            icon={<IoIosNotificationsOutline size={20} />}
          />

          <Dropdown renderToggle={ProfileMenu}>
            <Dropdown.Item className="subtitle1 " icon={<BiUser />}>
              Account
            </Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item className="subtitle1 " icon={<IoIosLogIn />}>
              Sign Out
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
