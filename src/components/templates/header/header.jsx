import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import useDisplay from "../../../hooks/useDisplay";
import MainContainer from "../layouts/mainContainer";

import i18next from "../../../hooks/lang/i18n";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: 1;
  background: #0a0518;
  height: 64px;
  width: 100%;
`;

const Button = styled.div.attrs((props) => {})`
  position: relative;
  padding-left: 48px;

  color: ${(props) => (props.active ? "#ffd154" : "white")};
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: ${(props) => (props.active ? "700" : "500")};

  cursor: pointer;

  &:hover {
    cursor: pointer;
    font-weight: 700;
    color: #ffd154;
  }
`;

const LangButton = styled.div.attrs((props) => {})`
  color: ${(props) => (props.active ? "white" : "#777777")};
  font-size: 13px;
  font-family: "Pretendard";
  font-weight: 600;
  cursor: pointer;
`;

const MenuLayout = styled.div`
  z-index: 999;
  position: absolute;
  box-shadow: 2px 2px 13pxrgba (0, 0, 0, 0.16);
  padding: 17px 16px;
  background: #000000;
  margin-top: 24px;
  width: 196px;
  top: 18px;
  left: 30px;
`;

const MenuLinkBasicButton = styled.div.attrs((props) => {})`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration-line: underline;
  }
`;

function Header(props) {
  const [itemClickedList, setItemClickedList] = useState({
    about: false,
    projects: false,
    history: false,
    news: false,
    contact: false,
  });

  const langType = localStorage.getItem("langType");

  const history = useHistory();

  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  const clickHandler = (lang) => {
    i18next.changeLanguage(lang);

    localStorage.setItem("langType", lang);
  };

  return (
    <>
      <Layout>
        <MainContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: 77,
                  height: 37,
                  marginRight: 70,
                }}
                src="./assets/icons/logo01.png"
                alt="logo01"
              />

              <Button
                onClick={() => {
                  props.onAboutUslick(1);
                }}
                active={itemClickedList.about}
                style={{
                  width: 70,
                }}
              >
                About Us
              </Button>
              <Button
                active={itemClickedList.projects}
                onMouseOver={() => {
                  setItemClickedList({
                    about: false,
                    projects: true,
                    history: false,
                    news: false,
                    contact: false,
                  });
                }}
                style={{
                  width: 94,
                }}
              >
                Our Projects
                {itemClickedList.projects ? (
                  <MenuLayout
                    onMouseLeave={() => {
                      setItemClickedList({
                        about: false,
                        projects: false,
                        history: false,
                        news: false,
                        contact: false,
                      });
                    }}
                  >
                    <MenuLinkBasicButton
                      onClick={() => {
                        props.setProjects(1);
                        props.onAboutUslick(2);
                      }}
                      style={{
                        marginBottom: 16,
                      }}
                    >
                      Zoids Wild
                    </MenuLinkBasicButton>
                    <MenuLinkBasicButton
                      onClick={() => {
                        props.setProjects(2);
                        props.onAboutUslick(2);
                      }}
                      style={{
                        marginBottom: 16,
                      }}
                    >
                      BUB’S PUZZLE BLAST
                    </MenuLinkBasicButton>
                    <MenuLinkBasicButton
                      onClick={() => {
                        props.setProjects(3);
                        props.onAboutUslick(2);
                      }}
                      style={{
                        marginBottom: 16,
                      }}
                    >
                      AGGRETSUKO
                    </MenuLinkBasicButton>
                    <MenuLinkBasicButton
                      style={{
                        marginBottom: 16,
                      }}
                      onClick={() => {
                        props.setProjects(4);
                        props.onAboutUslick(2);
                      }}
                    >
                      PEKO POP
                    </MenuLinkBasicButton>
                    <MenuLinkBasicButton
                      style={{
                        marginBottom: 16,
                      }}
                      onClick={() => {
                        props.setProjects(5);
                        props.onAboutUslick(2);
                      }}
                    >
                      MOGMOG PLANTE
                    </MenuLinkBasicButton>
                    <MenuLinkBasicButton
                      onClick={() => {
                        props.setProjects(1);
                        props.onAboutUslick(2);
                      }}
                    >
                      PROJECT M
                    </MenuLinkBasicButton>
                  </MenuLayout>
                ) : null}
              </Button>
              <Button
                onClick={() => {
                  props.onAboutUslick(3);
                }}
                style={{
                  width: 87,
                }}
              >
                Our History
              </Button>
              <Button
                onClick={() => {
                  props.onAboutUslick(4);
                }}
                style={{
                  width: 50,
                }}
              >
                News
              </Button>
              <Button
                onClick={() => {
                  props.onAboutUslick(5);
                }}
                style={{}}
              >
                Contact
              </Button>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <LangButton
                onClick={() => clickHandler("ko")}
                active={langType === "ko" ? true : false}
              >
                KO
              </LangButton>
              <div style={{ color: "#777777", margin: "0px 12px" }}>l</div>
              <LangButton
                onClick={() => clickHandler("en")}
                active={langType === "en" ? true : false}
              >
                EN
              </LangButton>
              <div style={{ color: "#777777", margin: "0px 12px" }}>l</div>
              <LangButton
                onClick={() => clickHandler("jp")}
                active={langType === "jp" ? true : false}
              >
                JP
              </LangButton>
            </div>
          </div>
        </MainContainer>
      </Layout>
    </>
  );
}

export default Header;
