import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

import i18next from "../../../hooks/lang/i18n";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  overflow: hidden !important;
  touch-action: none;
`;

const move = keyframes`
from {
  left: -300px;
}
to {
  left: 0px;
}
`;

const MenuMobile = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #0a0518;
  text-align: left;
  animation-name: ${move};
  animation-duration: 1s;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const ListMenu = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
  border-bottom: 1px solid #555555;
`;

const ListMenuMain = styled.div.attrs((props) => {})`
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
  font-family: Pretendard;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    font-weight: 700;
    color: #ffd154;
  }
`;

const ListMenuSub = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  font-family: Pretendard;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    cursor: pointer;
    font-weight: 700;
    color: #ffd154;
  }
`;

const LangButton = styled.div.attrs((props) => {})`
  color: ${(props) => (props.active ? "white" : "#777777")};
  font-size: 15px;
  font-family: "Pretendard";
  font-weight: 600;
  cursor: pointer;
`;

function SideMenu(props) {
  const [itemClickedList, setItemClickedList] = useState({
    aboutUs: false,
    ourProjects: false,
    ourHistory: false,
    news: false,
    contact: false,
  });

  const langType = localStorage.getItem("langType");

  const history = useHistory();

  useEffect(() => {}, []);

  const clickHandler = (lang) => {
    i18next.changeLanguage(lang);

    localStorage.setItem("langType", lang);
  };

  return (
    <>
      <Modal>
        <MenuMobile>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 25,
              alignItems: "center",

              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <img
              style={{
                width: 66,
                height: 31.73,
              }}
              src="./assets/icons/logo01.png"
              alt="logo01"
            />
            <img
              style={{
                cursor: "pointer",
                width: 24,
                height: 24,
              }}
              src="./assets/icons/close.png"
              alt="close"
              onClick={() => props.close(false)}
            />
          </div>
          <div>
            <ListMenu>
              <ListMenuMain
                onClick={() => {
                  props.onAboutUslick(1);
                  props.close(false);
                }}
              >
                About Us
              </ListMenuMain>
            </ListMenu>
            <ListMenu>
              <ListMenuMain
                style={{
                  color: itemClickedList.ourProjects ? "#FFD154" : "#FFFFFF",
                  fontWeight: itemClickedList.ourProjects ? 700 : 500,
                }}
              >
                Our Projects
                {itemClickedList.ourProjects ? (
                  <img
                    style={{
                      cursor: "pointer",
                      width: 13,
                      height: 7,
                      marginRight: 4,
                    }}
                    src="./assets/icons/menu_up.png"
                    alt="menu_up"
                    onClick={() => {
                      setItemClickedList({
                        ...itemClickedList,
                        ourProjects: false,
                      });
                    }}
                  />
                ) : (
                  <img
                    style={{
                      cursor: "pointer",
                      width: 13,
                      height: 7,
                      marginRight: 4,
                    }}
                    src="./assets/icons/menu_down.png"
                    alt="menu_down"
                    onClick={() => {
                      setItemClickedList({
                        ...itemClickedList,
                        ourProjects: true,
                      });
                    }}
                  />
                )}
              </ListMenuMain>
              {itemClickedList.ourProjects ? (
                <div>
                  <ListMenuSub
                    onClick={() => {
                      props.setProjects(1);
                      props.onAboutUslick(2);
                      props.close(false);
                    }}
                  >
                    Zoids Wild
                  </ListMenuSub>
                  <ListMenuSub
                    onClick={() => {
                      props.setProjects(2);
                      props.onAboutUslick(2);
                      props.close(false);
                    }}
                  >
                    BUB’S PUZZLE BLAST
                  </ListMenuSub>
                  <ListMenuSub
                    onClick={() => {
                      props.setProjects(3);
                      props.onAboutUslick(2);
                      props.close(false);
                    }}
                  >
                    AGGRETSUKO
                  </ListMenuSub>
                  <ListMenuSub
                    onClick={() => {
                      props.setProjects(4);
                      props.onAboutUslick(2);
                      props.close(false);
                    }}
                  >
                    PEKO POP
                  </ListMenuSub>
                  <ListMenuSub
                    onClick={() => {
                      props.setProjects(5);
                      props.onAboutUslick(2);
                      props.close(false);
                    }}
                  >
                    MOGMOG PLANTE
                  </ListMenuSub>
                  <ListMenuSub
                    onClick={() => {
                      props.setProjects(1);
                      props.onAboutUslick(2);
                      props.close(false);
                    }}
                    style={{
                      marginBottom: 24,
                    }}
                  >
                    PROJECT M
                  </ListMenuSub>
                </div>
              ) : null}
            </ListMenu>
            <ListMenu>
              <ListMenuMain
                onClick={() => {
                  props.onAboutUslick(3);
                  props.close(false);
                }}
              >
                Our History
              </ListMenuMain>
            </ListMenu>
            <ListMenu>
              <ListMenuMain
                onClick={() => {
                  props.onAboutUslick(4);
                  props.close(false);
                }}
              >
                News
              </ListMenuMain>
            </ListMenu>
            <ListMenu>
              <ListMenuMain
                onClick={() => {
                  props.onAboutUslick(5);
                  props.close(false);
                }}
              >
                Contact
              </ListMenuMain>
            </ListMenu>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: "24px 20px",
            }}
          >
            <LangButton
              onClick={() => clickHandler("ko")}
              active={langType === "ko" ? true : false}
            >
              KOREAN
            </LangButton>
            <div style={{ color: "#777777", margin: "0px 16px" }}>l</div>
            <LangButton
              onClick={() => clickHandler("en")}
              active={langType === "en" ? true : false}
            >
              ENGLISH
            </LangButton>
            <div style={{ color: "#777777", margin: "0px 16px" }}>l</div>
            <LangButton
              onClick={() => clickHandler("jp")}
              active={langType === "jp" ? true : false}
            >
              JAPANESE
            </LangButton>
          </div>
        </MenuMobile>
      </Modal>
    </>
  );
}

export default SideMenu;
