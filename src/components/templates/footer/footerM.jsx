import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import useDisplay from "../../../hooks/useDisplay";

function FooterM() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            background: "#000000",
            width: "100%",
            paddingTop: 40,
            paddingBottom: 44,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: 82,
                  height: 39,
                  marginBottom: 20,
                }}
                src={"./assets/icons/logo04.png"}
                alt="logo04"
              />

              <div
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  fontFamily: "Pretendard",
                  color: "#AAAAAA",
                  lineHeight: "18px",
                }}
              >
                contact@actgames.co.kr
              </div>

              <div
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  fontFamily: "Pretendard",
                  color: "#AAAAAA",
                  lineHeight: "18px",
                }}
              >
                © ACT Games Co., Ltd. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterM;
