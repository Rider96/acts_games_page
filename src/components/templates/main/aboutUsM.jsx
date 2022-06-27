import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import useDisplay from "../../../hooks/useDisplay";

function AboutUsM() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <div
        style={{
          width: "100%",
          height: 535,
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundImage: `url("/assets/images/bg_m02.png")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 535,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                style={{
                  width: 15.59,
                  height: 15.59,
                  marginTop: 49,
                  marginLeft: 58,
                  marginBottom: 10,
                }}
                src="/assets/icons/triangle.png"
                alt="triangle"
              />

              <div
                style={{
                  position: "relative",
                  fontSize: 26,
                  lineHeight: "38px",
                  fontWeight: 700,
                  fontFamily: "Pretendard",
                  color: "white",
                  marginBottom: 23,
                  marginLeft: 23,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {t("aboutUs_title01_m")}
                </div>
                <div> {t("aboutUs_title02_m")} </div>
                <div> {t("aboutUs_title03_m")}</div>
                <img
                  style={{
                    position: "absolute",
                    right: 0,
                    width: 10,
                    height: 10,
                    right: 70,
                    top: 60,
                  }}
                  src="/assets/icons/circle.png"
                  alt="circle"
                />

                <img
                  style={{
                    width: 14,
                    height: 14,
                    marginTop: 10,
                    marginLeft: 107,
                  }}
                  src="/assets/icons/square.png"
                  alt="square"
                />
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                  fontFamily: "Pretendard",
                  color: "white",
                  lineHeight: "29px",
                  position: "relative",
                  marginLeft: 20,
                  marginRight: 30,
                }}
              >
                {t("aboutUs_content")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsM;
