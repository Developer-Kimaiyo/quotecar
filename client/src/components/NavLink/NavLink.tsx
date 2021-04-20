import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type NavLinkProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  iconClass?: string;
  onClick?: () => void;
};

const Icon = styled.span`
  min-width: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink: React.SFC<NavLinkProps> = ({
  href,
  label,
  icon,
  className,
  onClick,
  iconClass,
}) => {
  return (
    <div onClick={onClick} className={className ? className : ""}>
      <Link
        to={href}
        className="current-page"
        style={{ display: "flex", alignItems: "center" }}
      >
        {icon ? <Icon className={iconClass}>{icon}</Icon> : ""}

        <span className="label">{label}</span>
      </Link>
    </div>
  );
};

export default NavLink;
