import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import useDisplay from "../../../hooks/useDisplay";

function MainVideoM() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const [itemData, setItemData] = useState({
    images: [
      "./assets/images/bg_m01_01.png",
      "./assets/images/bg_m01_02.png",
      "./assets/images/bg_m01_03.png",
      "./assets/images/bg_m01_04.png",
      "./assets/images/bg_m01_05.png",
      "./assets/images/bg_m01_06.png",
    ],
  });

  useEffect(() => {
    console.log(isTablet);
    console.log(isMobile);

    if (isTablet) {
      setItemData({
        images: [
          "./assets/images/bg_t01_01.png",
          "./assets/images/bg_t01_02.png",
          "./assets/images/bg_t01_03.png",
          "./assets/images/bg_t01_04.png",
          "./assets/images/bg_t01_05.png",
          "./assets/images/bg_t01_06.png",
        ],
      });
    } else {
      setItemData({
        images: [
          "./assets/images/bg_m01_01.png",
          "./assets/images/bg_m01_02.png",
          "./assets/images/bg_m01_03.png",
          "./assets/images/bg_m01_04.png",
          "./assets/images/bg_m01_05.png",
          "./assets/images/bg_m01_06.png",
        ],
      });
    }
  }, [isMobile, isTablet]);

  const { t } = useTranslation();

  var settings = {
    dots: false,
    arrows: false,

    infinite: true,
    speed: 500,

    autoplay: true,
    autoplaySpeed: 4000,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
          <Slider {...settings}>
            {itemData.images.map((item, index) => {
              return (
                <img
                  key={index + 1}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={item}
                  alt="slider"
                />
              );
            })}
          </Slider>
        </div>

        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0%)",
            display: "flex",
            flex: 1,
            top: "39%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 282,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: 115.25,
                height: 46.84,
              }}
              src="./assets/icons/logo02.png"
              alt="logo02"
            />
            <div
              style={{
                fontSize: 50,
                lineHeight: "48px",
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
              fontSize: 18,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "white",
              textAlign: "center",
              marginTop: 15,
              marginBottom: 30,
            }}
          >
            <div>Across the Culture and Technology</div>
            <div>ALL About FUN</div>
          </div>
        </div>

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
              fontSize: 12,
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
              marginBottom: 31,
            }}
            src="./assets/icons/down_arrow.png"
            alt="down_arrow"
          />
        </div>
      </div>
    </>
  );
}

export default MainVideoM;
