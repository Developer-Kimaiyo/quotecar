import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Drawer from "../../../components/Drawer/Drawer";
import NavLink from "../../../components/NavLink/NavLink";
import { CloseIcon } from "../../../components/AllSvgIcon";
import { DrawerContext } from "../../../contexts/drawer/drawer.context";

import {
  HamburgerIcon,
  DrawerContentWrapper,
  DrawerClose,
  DrawerMenu,
  DrawerMenuItem,
} from "./Header.style";

const DrawerMenuItems = [
  {
    id: 1,
    intlLabelId: "navLinkHome",
    label: "Home",
    href: "/",
  },
];

const MobileDrawer: React.FunctionComponent = () => {
  const { state, dispatch } = useContext<any>(DrawerContext);
  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: "TOGGLE",
    });
  }, [dispatch]);

  return (
    <Drawer
      width="316px"
      drawerHandler={
        <HamburgerIcon>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <DrawerClose>
          <CloseIcon />
        </DrawerClose>
      }
    >
      <Scrollbars autoHide>
        <DrawerContentWrapper>
          <DrawerMenu>
            {DrawerMenuItems.map((item) => (
              <DrawerMenuItem key={item.id}>
                <NavLink
                  onClick={toggleHandler}
                  href={item.href}
                  label={item.label}
                  className="drawer_menu_item"
                />
              </DrawerMenuItem>
            ))}
          </DrawerMenu>
        </DrawerContentWrapper>
      </Scrollbars>
    </Drawer>
  );
};

export default MobileDrawer;
