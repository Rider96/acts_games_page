import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import useDisplay from "../../../hooks/useDisplay";

const ImageShadow = styled.div.attrs((props) => {})`
  position: absolute;
  width: 100%;
  height: 101px;
  left: 0px;
  bottom: 0px;

  background: linear-gradient(180deg, #000000 24.28%, rgba(0, 0, 0, 0) 91.29%);
  transform: rotate(-180deg);
`;

const ImageCard = styled.img.attrs((props) => {})`
  cursor: pointer;
  margin-right: 22px;
  width: 157px;
  height: 95px;

  ::after {
    background: linear-gradient(transparent, black);
  }
`;

const Container = styled.div.attrs((props) => {})`
  width: 1346px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function GameIntro() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const { t } = useTranslation();

  const customeSlider = React.createRef();

  const [count, setCount] = useState(1);
  const [countProcess, setCountProcess] = useState(true);
  const [beforeArrow, setBeforeArrow] = useState(false);
  const [afterArrow, setAfterArrow] = useState(true);

  const [topImage, setTopImage] = useState(
    "/assets/images/gameIntro/main_top01.png"
  );
  const [itemData, setItemData] = useState({
    name: "ZOIDS WILD",
    store: {
      window: {
        show: true,
        link: "",
      },
      apple: {
        show: true,
        link: "",
      },
      android: {
        show: true,
        link: "",
      },
    },
    images: [],
  });
  const [itemClickedList, setItemClickedList] = useState({
    item01: true,
    item02: false,
    item03: false,
    item04: false,
    item05: false,
    item06: false,
  });

  var settings = {
    className: "slider variable-width",

    dots: false,
    arrows: false,

    infinite: false,
    speed: 500,

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

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  useEffect(() => {
    if (!countProcess) return undefined;

    const tick = setTimeout(() => {
      if (count <= 5) {
        setCount(count + 1);

        switch (count) {
          case 1:
            setItemClickedList({
              item01: true,
              item02: false,
              item03: false,
              item04: false,
              item05: false,
              item06: false,
            });
            break;
          case 2:
            setItemClickedList({
              item01: false,
              item02: true,
              item03: false,
              item04: false,
              item05: false,
              item06: false,
            });
            break;
          case 3:
            setItemClickedList({
              item01: false,
              item02: false,
              item03: true,
              item04: false,
              item05: false,
              item06: false,
            });
            break;
          case 4:
            setItemClickedList({
              item01: false,
              item02: false,
              item03: false,
              item04: true,
              item05: false,
              item06: false,
            });
            break;
          case 5:
            setItemClickedList({
              item01: false,
              item02: false,
              item03: false,
              item04: false,
              item05: true,
              item06: false,
            });
            break;
        }
      } else {
        setCount(1);
      }
    }, 4000);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(tick);
  }, [count]);

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

  useEffect(() => {
    if (itemClickedList.item01) {
      setTopImage("/assets/images/gameIntro/main_top01.png");
      setItemData({
        name: "ZOIDS WILD",
        store: {
          window: {
            show: true,
            link: "",
          },
          apple: {
            show: true,
            link: "",
          },
          android: {
            show: true,
            link: "",
          },
        },
        images: [
          {
            url: "/assets/images/gameIntro/game01_slide01.png",
            link: "",
          },
          {
            url: "/assets/images/gameIntro/game01_slide02.png",
            link: "",
          },
          {
            url: "/assets/images/gameIntro/game01_slide03.png",
            link: "",
          },
        ],
      });
    } else if (itemClickedList.item02) {
      setTopImage("/assets/images/gameIntro/main_top02.png");
      setItemData({
        name: "BUB'S PUZZLE BLAST",
        store: {
          window: {
            show: false,
            link: "",
          },
          apple: {
            show: true,
            link: "https://apps.apple.com/kr/app/bubs-puzzle-blast/id1585641856",
          },
          android: {
            show: true,
            link: "https://play.google.com/store/apps/details?id=com.actgames.bubble&hl=kr_US&gl=US",
          },
        },
        images: [
          {
            url: "/assets/images/gameIntro/game02_slide01.png",
            link: "https://youtu.be/F_wxynHm32g",
          },
          {
            url: "/assets/images/gameIntro/game02_slide02.png",
            link: "",
          },
          {
            url: "/assets/images/gameIntro/game02_slide03.png",
            link: "",
          },
        ],
      });
    } else if (itemClickedList.item03) {
      setTopImage("/assets/images/gameIntro/main_top03.png");
      setItemData({
        name: "AGGRETSUKO",
        store: {
          window: {
            show: false,
            link: "",
          },
          apple: {
            show: true,
            link: "https://apps.apple.com/kr/app/id1516629235",
          },
          android: {
            show: true,
            link: "https://play.google.com/store/apps/details?id=com.hive.aggretsuko&hl=ko",
          },
        },
        images: [
          {
            url: "/assets/images/gameIntro/game03_slide01.png",
            link: "https://youtu.be/WNEWqHPEWDY",
          },
          {
            url: "/assets/images/gameIntro/game03_slide02.png",
            link: "",
          },
          {
            url: "/assets/images/gameIntro/game03_slide03.png",
            link: "",
          },
        ],
      });
    } else if (itemClickedList.item04) {
      setTopImage("/assets/images/gameIntro/main_top04.png");
      setItemData({
        name: "PEKO POP",
        store: {
          window: {
            show: false,
            link: "",
          },
          apple: {
            show: true,
            link: "https://apps.apple.com/kr/app/peko-pop-match-3-puzzle/id1542304039",
          },
          android: {
            show: true,
            link: "https://play.google.com/store/apps/details?id=com.hive.peko&hl=ko",
          },
        },
        images: [
          {
            url: "/assets/images/gameIntro/game04_slide01.png",
            link: "https://www.youtube.com/watch?v=rRh4qv7EuKg",
          },
          {
            url: "/assets/images/gameIntro/game04_slide02.png",
            link: "",
          },
          {
            url: "/assets/images/gameIntro/game04_slide03.png",
            link: "",
          },
        ],
      });
    } else if (itemClickedList.item05) {
      setTopImage("/assets/images/gameIntro/main_top05.png");
      setItemData({
        name: "MOGMOG PLANET",
        store: {
          window: {
            show: false,
            link: "",
          },
          apple: {
            show: true,
            link: "https://apps.apple.com/kr/app/%EB%AA%A8%EA%B5%AC%EB%AA%A8%EA%B5%AC-%ED%94%8C%EB%9E%98%EB%8B%9B/id1591891005",
          },
          android: {
            show: true,
            link: "https://play.google.com/store/apps/details?id=com.actgames.shaku&hl=ko&gl=US",
          },
        },
        images: [
          {
            url: "/assets/images/gameIntro/game05_slide01.png",
            link: "https://youtu.be/N9_zpRueUTg",
          },
          {
            url: "/assets/images/gameIntro/game05_slide02.png",
            link: "",
          },
          {
            url: "/assets/images/gameIntro/game05_slide03.png",
            link: "",
          },
        ],
      });
    } else if (itemClickedList.item06) {
      setTopImage("/assets/images/gameIntro/main_top06.png");
    }
  }, [itemClickedList]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 370,
            position: "relative",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={topImage}
            alt="main_top01"
          />

          <ImageShadow />
        </div>

        <div
          style={{
            flex: 1,
            background: "#0A0518",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <ImageCard
              src={
                itemClickedList.item01
                  ? "/assets/images/gameIntro/main_mini01.png"
                  : "/assets/images/gameIntro/main_mini01_d.png"
              }
              alt="main_mini01"
              onClick={() => {
                setItemClickedList({
                  item01: true,
                  item02: false,
                  item03: false,
                  item04: false,
                  item05: false,
                  item06: false,
                });
                setCount(1);
              }}
            />
            <ImageCard
              src={
                itemClickedList.item02
                  ? "/assets/images/gameIntro/main_mini02.png"
                  : "/assets/images/gameIntro/main_mini02_d.png"
              }
              alt="main_mini02"
              onClick={() => {
                setItemClickedList({
                  item01: false,
                  item02: true,
                  item03: false,
                  item04: false,
                  item05: false,
                  item06: false,
                });
                setCount(2);
              }}
            />
            <ImageCard
              src={
                itemClickedList.item03
                  ? "/assets/images/gameIntro/main_mini03.png"
                  : "/assets/images/gameIntro/main_mini03_d.png"
              }
              alt="main_mini03"
              onClick={() => {
                setItemClickedList({
                  item01: false,
                  item02: false,
                  item03: true,
                  item04: false,
                  item05: false,
                  item06: false,
                });
                setCount(3);
              }}
            />
            <ImageCard
              src={
                itemClickedList.item04
                  ? "/assets/images/gameIntro/main_mini04.png"
                  : "/assets/images/gameIntro/main_mini04_d.png"
              }
              alt="main_mini04"
              onClick={() => {
                setItemClickedList({
                  item01: false,
                  item02: false,
                  item03: false,
                  item04: true,
                  item05: false,
                  item06: false,
                });
                setCount(4);
              }}
            />
            <ImageCard
              src={
                itemClickedList.item05
                  ? "/assets/images/gameIntro/main_mini05.png"
                  : "/assets/images/gameIntro/main_mini05_d.png"
              }
              alt="main_mini05"
              onClick={() => {
                setItemClickedList({
                  item01: false,
                  item02: false,
                  item03: false,
                  item04: false,
                  item05: true,
                  item06: false,
                });
                setCount(5);
              }}
            />
            <div
              style={{
                position: "relative",
              }}
            >
              <ImageCard
                style={{
                  marginRight: 0,
                }}
                src="/assets/images/gameIntro/main_mini06.png"
                alt="main_mini06"
              />
              <div
                style={{
                  position: "absolute",
                  top: 29,
                  color: "#D9D9D9",
                  textAlign: "center",
                  left: "50%",
                  transform: "translate(-50%, 0%)",
                  fontFamily: "Pretendard",
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                <div>COMING</div>
                <div>SOON</div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 67,
            }}
          >
            <Container>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  {itemData.name}
                </div>
                <div
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: 500,
                    fontSize: 18,
                    color: "white",
                    margin: "0px 16px",
                  }}
                >
                  l
                </div>
                {itemData.store.window.show ? (
                  <img
                    onClick={() => {
                      if (itemData.store.window.link === "") {
                        return;
                      }

                      window.open(itemData.store.window.link, "_blank");
                    }}
                    style={{
                      cursor: "pointer",
                      width: 20,
                      height: 22,
                      marginRight: 16,
                    }}
                    src={"/assets/icons/windows.png"}
                    alt="windows"
                  />
                ) : null}
                {itemData.store.apple.show ? (
                  <img
                    onClick={() => {
                      if (itemData.store.apple.link === "") {
                        return;
                      }

                      window.open(itemData.store.apple.link, "_blank");
                    }}
                    style={{
                      cursor: "pointer",
                      width: 20,
                      height: 23.08,
                      marginRight: 14,
                    }}
                    src={"/assets/icons/apple.png"}
                    alt="apple"
                  />
                ) : null}
                {itemData.store.android.show ? (
                  <img
                    onClick={() => {
                      if (itemData.store.android.link === "") {
                        return;
                      }

                      window.open(itemData.store.android.link, "_blank");
                    }}
                    style={{
                      cursor: "pointer",
                      width: 23,
                      height: 22,
                    }}
                    src={"/assets/icons/android.png"}
                    alt="android"
                  />
                ) : null}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
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
                      ? "/assets/icons/s_left_arrow.png"
                      : "/assets/icons/s_left_arrow_d.png"
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
                      ? "/assets/icons/s_right_arrow.png"
                      : "/assets/icons/s_right_arrow_d.png"
                  }
                  alt="s_right_arrow"
                />
              </div>
            </Container>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 26,
            }}
          >
            <div
              style={{
                width: 1346,
                display: "block",
              }}
            >
              <Slider {...settings} ref={customeSlider}>
                {itemData.images.map((item, index) => {
                  return (
                    <div key={index + 1}>
                      {item === "" ? (
                        <div />
                      ) : (
                        <img
                          onClick={() => {
                            if (item.link === "") {
                              return;
                            }

                            window.open(item.link, "_blank");
                          }}
                          style={{
                            cursor: "pointer",
                            width:
                              (index + 1) % 3 === 1
                                ? 446
                                : (index + 1) % 3 === 2
                                ? 508
                                : 392,
                            height: 250,
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
                      )}
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
}

export default GameIntro;
