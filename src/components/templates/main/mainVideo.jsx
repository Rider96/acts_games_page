import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import useDisplay from "../../../hooks/useDisplay";

function MainVideo() {
  const history = useHistory();

  const { t } = useTranslation();

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "93.5vh",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "93.5vh",
          }}
        >
          <video
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="./assets/video/main_video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0%)",
            display: "flex",
            flex: 1,
            top: 0,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
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
                width: 160,
                height: 64,
                marginRight: 17,
                marginTop: 7,
              }}
              src="./assets/icons/logo02.png"
              alt="logo02"
            />
            <div
              style={{
                fontSize: 73,
                fontWeight: 700,
                fontFamily: "Pretendard",
                color: "white",
              }}
            >
              GAMES
            </div>
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "white",
              textAlign: "center",
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            <div>Across the Culture and Technology</div>
            <div>ALL About FUN</div>
          </div>
        </div> */}

        <div
          style={{
            position: "absolute",
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            left: "50%",
            transform: "translate(-50%, 0%)",
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "Pretendard",
              color: "white",
              marginBottom: 10,
            }}
          >
            SCROLL DOWN
          </div>

          <img
            onClick={() => {}}
            style={{
              cursor: "pointer",
              width: 13.36,
              height: 7.65,
              marginBottom: 32,
            }}
            src="./assets/icons/down_arrow.png"
            alt="down_arrow"
          />
        </div>
      </div>
    </>
  );
}

export default MainVideo;
