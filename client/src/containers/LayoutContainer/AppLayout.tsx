import React, { FunctionComponent, lazy, useEffect, useState } from "react";
import Sticky from "react-stickynode";
import styled from "styled-components";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { HOME_PAGE } from "../../constants/navigation";
import { useRouter } from "./useRouter";
const MobileHeader = lazy(() => import("./Header/MobileHeader"));
const LayoutWrapper = styled.div`
  background-color: #f7f7f7;
  .reuseModalHolder {
    padding: 0;
    overflow: auto;
    border-radius: 3px 3px 0 0;
    border: 0;
  }
`;

type LayoutProps = {
  children: any;
  className?: string;

};

const Layout: FunctionComponent<LayoutProps> = ({
  className,
  children,

}) => {
  const [isSticky, setIsSticky] = useState(false);
  const { pathname } = useRouter();
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition >= 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomePage = pathname === HOME_PAGE;
  return (
    <>
      <LayoutWrapper className={`layoutWrapper ${className}`}>

      
          <>
            <Sticky enabled={isSticky} innerZ={1001}>
              <MobileHeader
                className={`${isSticky ? "sticky" : "unSticky"} ${
                  isHomePage ? "home" : ""
                } desktop`}
              />
              <Header
                className={`${isSticky ? "sticky" : "unSticky"} ${
                  isHomePage ? "home" : ""
                }`}
                pathname={pathname}
              />{" "}
            </Sticky>{" "}
          </>
        {children}
        <Sticky enabled={true} top={50} bottomBoundary={1200}>
          <Footer
            name="PrixCar"
            mobile1="1300 668 105"
            mobile2="1300 660 616"
          />
        </Sticky>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
