import React, { useState, useEffect, forwardRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import useDisplay from "../../../hooks/useDisplay";

const News = forwardRef((props, ref) => {
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
    className: "slider variable-width",

    dots: true,
    arrows: false,

    infinite: false,
    speed: 500,
    dotsClass: "button__bar",

    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    beforeChange: function (currentSlide, nextSlide) {
      if ((currentSlide === 0 || currentSlide === 3) && nextSlide === 0) {
        setBeforeArrow(false);
      } else {
        setBeforeArrow(true);
      }
    },
    afterChange: function (currentSlide) {
      if (itemData.images.length > currentSlide + 3) {
        setAfterArrow(true);
      } else {
        setAfterArrow(false);
      }
    },
  };

  useEffect(() => {
    setBeforeArrow(false);
    if (itemData.images.length > 3) {
      setAfterArrow(true);
    } else {
      setAfterArrow(false);
    }

    const tempCount = itemData.images.length % 3;

    switch (tempCount) {
      case 2:
        itemData.images.push("");
        break;
      case 1:
        itemData.images.push("");
        itemData.images.push("");
        break;
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
          width: "100%",
          height: 733,
        }}
      >
        <div
          style={{
            position: "relative",
            background: "#0A0518",
            width: "100%",
            height: 733,
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
                marginTop: 100,
                marginBottom: 36,
                fontSize: 50,
                fontWeight: 700,
                fontFamily: "Pretendard",
                color: "white",
              }}
            >
              News
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
                  width: 1346,
                  display: "block",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "100%",
                    marginBottom: 20,
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

                <Slider {...settings} ref={customeSlider}>
                  {itemData.images.map((item, index) => {
                    return (
                      <div key={index + 1}>
                        {item === "" ? (
                          <div />
                        ) : (
                          <div
                            style={{
                              width:
                                (index + 1) % 3 === 1
                                  ? 423
                                  : (index + 1) % 3 === 2
                                  ? 500
                                  : 423,
                            }}
                          >
                            <img
                              style={{
                                height: 236,
                                cursor: "pointer",
                                width:
                                  (index + 1) % 3 === 1
                                    ? 423
                                    : (index + 1) % 3 === 2
                                    ? 500
                                    : 423,
                                boxSizing: "border-box",
                                borderLeft:
                                  (index + 1) % 3 === 2
                                    ? "24px solid rgb(10, 5, 24)"
                                    : "none",
                                borderRight:
                                  (index + 1) % 3 === 2
                                    ? "24px solid rgb(10, 5, 24)"
                                    : "none",
                              }}
                              src={item.url}
                              alt="slider"
                            />
                            <div
                              style={{
                                marginTop: 25,
                                marginBottom: 12,
                                fontSize: 15,
                                fontWeight: 500,
                                color: "#D9D9D9",
                                fontFamily: "Pretendard",
                                marginLeft:
                                  (index + 1) % 3 === 2 ? "24px" : "none",
                                marginRight:
                                  (index + 1) % 3 === 2 ? "24px" : "none",
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
                                marginLeft:
                                  (index + 1) % 3 === 2 ? "24px" : "none",
                                marginRight:
                                  (index + 1) % 3 === 2 ? "24px" : "none",
                              }}
                            >
                              {item.content}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default News;
