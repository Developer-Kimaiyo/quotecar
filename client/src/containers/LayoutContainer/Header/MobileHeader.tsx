import React from "react";
import { DrawerProvider } from "../../../contexts/drawer/drawer.provider";
import MobileDrawer from "./MobileDrawer";
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  DrawerWrapper,
  LogoWrapper,
  Logo,
} from "./Header.style";

import { HOME_PAGE } from "../../../constants/navigation";
import { Link } from "react-router-dom";

type MobileHeaderProps = {
  className?: string;
};

const MobileHeader: React.FC<MobileHeaderProps> = (props) => {
  const { className } = props;

  return (
    <DrawerProvider>
      <MobileHeaderWrapper>
        <MobileHeaderInnerWrapper className={className}>
          <DrawerWrapper>
            <MobileDrawer />
          </DrawerWrapper>
          <LogoWrapper>
            <Logo>
              <Link to={HOME_PAGE}>
                <img
                  src="https://pro-theme.com/html/sokolcov/transcargo/img/logo.png"
                  alt="pickbazar-admin"
                />
              </Link>
            </Logo>
          </LogoWrapper>
        </MobileHeaderInnerWrapper>
      </MobileHeaderWrapper>
    </DrawerProvider>
  );
};

export default MobileHeader;
