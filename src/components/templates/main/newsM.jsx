import React, { useState, useEffect, forwardRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import useDisplay from "../../../hooks/useDisplay";

const NewsM = forwardRef((props, ref) => {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const { t } = useTranslation();

  const customeSlider = React.createRef();

  const [beforeArrow, setBeforeArrow] = useState(false);
  const [afterArrow, setAfterArrow] = useState(true);
  const [itemData, setItemData] = useState({
    images: [
      {
        url: "./assets/images/news/news01.png",
        date: "2022. 06. 07",
        content: "Zoids has been released ",
      },
      {
        url: "./assets/images/news/news02.png",
        date: "2022. 06. 07",
        content: "“Zoids Wild” has exceeded 100 million per month",
      },
      {
        url: "./assets/images/news/news03.png",
        date: "2022. 06. 07",
        content:
          "Takaratomy attended the licensing show and revealed ZOIDS NFT",
      },
      {
        url: "./assets/images/news/news04.png",
        date: "2022. 06. 07",
        content: "Zoids has been released ",
      },
      {
        url: "./assets/images/news/news05.png",
        date: "2022. 06. 07",
        content: "“Zoids Wild” has exceeded 100 million per month",
      },
      {
        url: "./assets/images/news/news06.png",
        date: "2022. 06. 07",
        content:
          "Takaratomy attended the licensing show and revealed ZOIDS NFT",
      },
      {
        url: "./assets/images/news/news07.png",
        date: "2022. 06. 07",
        content: "Zoids has been released ",
      },
      {
        url: "./assets/images/news/news08.png",
        date: "2022. 06. 07",
        content: "“Zoids Wild” has exceeded 100 million per month",
      },
      {
        url: "./assets/images/news/news09.png",
        date: "2022. 06. 07",
        content:
          "Takaratomy attended the licensing show and revealed ZOIDS NFT",
      },
    ],
  });

  var settings = {
    dots: true,
    arrows: false,

    infinite: false,
    speed: 500,
    dotsClass: "button__bar",

    slidesToShow: 1,
    slidesToScroll: 1,

    beforeChange: function (currentSlide, nextSlide) {
      if (currentSlide === 1 || nextSlide === 0) {
        setBeforeArrow(false);
      } else {
        setBeforeArrow(true);
      }
    },
    afterChange: function (currentSlide) {
      if (itemData.images.length - 1 === currentSlide) {
        setAfterArrow(false);
      } else {
        setAfterArrow(true);
      }
    },
  };

  useEffect(() => {
    setBeforeArrow(false);

    if (itemData.images.length > 1) {
      setAfterArrow(true);
    } else {
      setAfterArrow(false);
    }
  }, [itemData]);

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  return (
    <>
      <div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#0A0518",
          width: "100%",
          height: isTablet ? 560 : 519,
        }}
      >
        <div
          style={{
            flex: 1,
            marginLeft: 20,
            marginRight: 14,
          }}
        >
          <div
            style={{
              marginTop: 56,
              marginBottom: 34,
              fontSize: 26,
              fontWeight: 700,
              fontFamily: "Pretendard",
              color: "white",
              textAlign: "center",
            }}
          >
            News
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              marginBottom: 12,
            }}
          >
            <img
              onClick={() => {
                beforeArrow ? gotoPrev() : console.log("");
              }}
              style={{
                cursor: "pointer",
                width: 36,
                height: 10,
                marginRight: 22,
              }}
              src={
                beforeArrow
                  ? "./assets/icons/s_left_arrow.png"
                  : "./assets/icons/s_left_arrow_d.png"
              }
              alt="s_left_arrow"
            />
            <img
              onClick={() => {
                afterArrow ? gotoNext() : console.log("");
              }}
              style={{
                cursor: "pointer",
                width: 36,
                height: 10,
              }}
              src={
                afterArrow
                  ? "./assets/icons/s_right_arrow.png"
                  : "./assets/icons/s_right_arrow_d.png"
              }
              alt="s_right_arrow"
            />
          </div>

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
                width: "100%",
                display: "block",
              }}
            >
              <Slider {...settings} ref={customeSlider}>
                {itemData.images.map((item, index) => {
                  return (
                    <div key={index + 1}>
                      <img
                        style={{
                          height: isTablet ? 250 : 190,
                          cursor: "pointer",
                          width: "100%",
                        }}
                        src={item.url}
                        alt="slider"
                      />
                      <div
                        style={{
                          marginTop: 19,
                          marginBottom: 10,
                          fontSize: 13,
                          fontWeight: 500,
                          color: "#D9D9D9",
                          fontFamily: "Pretendard",
                        }}
                      >
                        {item.date}
                      </div>
                      <div
                        style={{
                          fontSize: 20,
                          fontWeight: 700,
                          color: "#FFFFFF",
                          fontFamily: "Pretendard",
                        }}
                      >
                        {item.content}
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default NewsM;
