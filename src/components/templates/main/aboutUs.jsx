import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import useDisplay from "../../../hooks/useDisplay";

function AboutUs() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <div
        style={{
          width: "100%",
          height: 725,
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundImage: `url("/assets/images/bg_pc02.png")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 725,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div style={{ flex: 1 }} />
            <div style={{ flex: 1, marginRight: 100 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  style={{
                    width: 26.77,
                    height: 26.77,
                    marginBottom: 34,
                    paddingRight: 20,
                  }}
                  src="/assets/icons/triangle.png"
                  alt="triangle"
                />

                <div
                  style={{
                    position: "relative",
                    fontSize: 40,
                    fontWeight: 700,
                    fontFamily: "Pretendard",
                    color: "white",
                    lineHeight: "54px",
                    marginBottom: 32,
                    marginLeft: 27,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: 600,
                    }}
                  >
                    {t("aboutUs_title01")}
                    <img
                      style={{
                        width: 19,
                        height: 20,
                      }}
                      src="/assets/icons/circle.png"
                      alt="circle"
                    />
                  </div>
                  <div>{t("aboutUs_title02")}</div>
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    fontFamily: "Pretendard",
                    color: "white",
                    lineHeight: "28px",
                    width: 602,
                    position: "relative",
                    marginLeft: 27,
                  }}
                >
                  {t("aboutUs_content")}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{
                      width: 24,
                      height: 25,
                      marginTop: 32,
                    }}
                    src="/assets/icons/square.png"
                    alt="square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
