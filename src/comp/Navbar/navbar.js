import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Components
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

const TopNavbar = () => {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate "
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="/" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              Metakul
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font20 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="/"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className="semiBold font20 pointer">
              <a
                activeClass="active"
                style={{ padding: "10px 15px" }}
                href="/#about"
                spy={true}
                smooth={true}
                offset={-80}
              >
                About
              </a>
            </li>
            <li className="semiBold font20 pointer">
              <a
                activeClass="active"
                style={{ padding: "10px 15px" }}
                href="/roadmap"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Roadmap
              </a>
            </li>
            <li className="semiBold font20 pointer">
              <a
                activeClass="active"
                style={{ padding: "10px 15px" }}
                href="/#kul-team"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Team
              </a>
            </li>

            <li className="semiBold font20 pointer">
              <a
                activeClass="active"
                style={{ padding: "10px 15px" }}
                href="/#contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </a>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font20 pointer">
              <a href="/mint" style={{ padding: "10px 30px 10px 0" }}>
                Mint
              </a>
            </li>
            <li className="semiBold font20 pointer flexCenter">
              <a
                href="/"
                className="radius8 border border-rounded"
                style={{ padding: "10px 10px", background: "#0d545ff0" }}
              >
                Connect Wallet
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;

export default TopNavbar;
