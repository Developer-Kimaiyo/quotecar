import React from "react";
import NavLink from "../../../components/NavLink/NavLink";
import { HelpIcon } from "../../../components/AllSvgIcon";
import HeaderWrapper, {
  HeaderLeftSide,
  HeaderRightSide,
  Logo,
} from "./Header.style";
import {
  HOME_PAGE,
  LOCATION_PAGE,
  SERVICE_PAGE,
  ABOUT_PAGE,
  FAQ_PAGE,
  CONTACT_PAGE,
  HELP_PAGE,
} from "../../../constants/navigation";
import { Link } from "react-router-dom";

type HeaderProps = {
  style?: any;
  className?: string;
  pathname: string;
};

const Header: React.FC<HeaderProps> = ({ style, className }) => {
  return (
    <HeaderWrapper style={style} className={className}>
      <HeaderLeftSide>
        <Logo>
          <Link to={HOME_PAGE}>
            <img
              src="https://pro-theme.com/html/sokolcov/transcargo/img/logo.png"
              alt="pickbazar-admin"
            />
          </Link>
        </Logo>
      </HeaderLeftSide>
      <HeaderRightSide>
        <NavLink className="menu-item" href={HOME_PAGE} label="Home" />
        <NavLink className="menu-item" href={LOCATION_PAGE} label="Location" />
        <NavLink className="menu-item" href={SERVICE_PAGE} label="Service" />
        <NavLink className="menu-item" href={ABOUT_PAGE} label="About" />
        <NavLink className="menu-item" href={FAQ_PAGE} label="FAQ" />
        <NavLink className="menu-item" href={CONTACT_PAGE} label="CONTACT" />
        <NavLink
          className="btn"
          href={HELP_PAGE}
          label="GET A FREE QUOTE"
          iconClass="menu-icon"
          icon={<HelpIcon />}
        />
      </HeaderRightSide>
    </HeaderWrapper>
  );
};

export default Header;
