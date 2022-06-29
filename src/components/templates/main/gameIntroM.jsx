import React, { useState, useEffect, forwardRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import useDisplay from "../../../hooks/useDisplay";

const ImageCard = styled.img.attrs((props) => {})`
  cursor: pointer;
  margin-right: 12px;
  width: ${(props) => (props.isTablet ? "120px" : "112.14px")};
  height: ${(props) => (props.isTablet ? "70px" : "67px")};

  ::after {
    background: linear-gradient(transparent, black);
  }
`;

const Container = styled.div.attrs((props) => {})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CateogryScroll = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  align-items: center;

  overflow-x: auto;
  white-space: pre-wrap;

  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const GameIntroM = forwardRef((props, ref) => {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const { t } = useTranslation();

  const customeSlider = React.createRef();
  const xScrollRef = React.createRef();

  const [count, setCount] = useState(1);
  const [countProcess, setCountProcess] = useState(true);
  const [beforeArrow, setBeforeArrow] = useState(false);
  const [afterArrow, setAfterArrow] = useState(true);

  const [topImage, setTopImage] = useState(
    "./assets/images/gameIntro/main_top01_m.png"
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
    youtube: {},
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
    dots: false,
    arrows: false,

    infinite: false,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,

    beforeChange: function (currentSlide, nextSlide) {
      if (currentSlide === 1 && nextSlide === 0) {
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

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  useEffect(() => {
    switch (props.projects) {
      case 1:
        setItemClickedList({
          item01: true,
          item02: false,
          item03: false,
          item04: false,
          item05: false,
          item06: false,
        });
        setCount(1);
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
        setCount(2);
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
        setCount(3);
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
        setCount(4);
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
        setCount(5);
        break;
    }
  }, [props]);

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

    if (itemData.images.length > 1) {
      setAfterArrow(true);
    } else {
      setAfterArrow(false);
    }
  }, [itemData]);

  useEffect(() => {
    if (itemClickedList.item01) {
      setTopImage("./assets/images/gameIntro/main_top01_m.png");
      setItemData({
        name: "ZOIDS WILD",
        store: {
          window: {
            show: false,
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
            url: "./assets/images/gameIntro/game01_slide02.png",
            link: "",
          },
          {
            url: "./assets/images/gameIntro/game01_slide03.png",
            link: "",
          },
        ],
        youtube: {
          url: "./assets/images/gameIntro/game01_slide01.png",
          link: "",
        },
      });
      xScrollRef.current?.scrollTo({ left: 0, behavior: "auto" });
    } else if (itemClickedList.item02) {
      setTopImage("./assets/images/gameIntro/main_top02_m.png");
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
            url: "./assets/images/gameIntro/game02_slide02.png",
            link: "",
          },
          {
            url: "./assets/images/gameIntro/game02_slide03.png",
            link: "",
          },
        ],
        youtube: {
          url: "./assets/images/gameIntro/game02_slide01.png",
          link: "https://youtu.be/F_wxynHm32g",
        },
      });
      xScrollRef.current?.scrollTo({ left: 60, behavior: "auto" });
    } else if (itemClickedList.item03) {
      setTopImage("./assets/images/gameIntro/main_top03_m.png");
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
            url: "./assets/images/gameIntro/game03_slide02.png",
            link: "",
          },
          {
            url: "./assets/images/gameIntro/game03_slide03.png",
            link: "",
          },
        ],
        youtube: {
          url: "./assets/images/gameIntro/game03_slide01.png",
          link: "https://youtu.be/WNEWqHPEWDY",
        },
      });
      xScrollRef.current?.scrollTo({ left: 120, behavior: "auto" });
    } else if (itemClickedList.item04) {
      setTopImage("./assets/images/gameIntro/main_top04_m.png");
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
            url: "./assets/images/gameIntro/game04_slide02.png",
            link: "",
          },
          {
            url: "./assets/images/gameIntro/game04_slide03.png",
            link: "",
          },
        ],
        youtube: {
          url: "./assets/images/gameIntro/game04_slide01.png",
          link: "https://www.youtube.com/watch?v=rRh4qv7EuKg",
        },
      });
      xScrollRef.current?.scrollTo({ left: 180, behavior: "auto" });
    } else if (itemClickedList.item05) {
      setTopImage("./assets/images/gameIntro/main_top05_m.png");
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
            url: "./assets/images/gameIntro/game05_slide02.png",
            link: "",
          },
          {
            url: "./assets/images/gameIntro/game05_slide03.png",
            link: "",
          },
        ],
        youtube: {
          url: "./assets/images/gameIntro/game05_slide01.png",
          link: "https://youtu.be/N9_zpRueUTg",
        },
      });
      xScrollRef.current?.scrollTo({ left: 300, behavior: "auto" });
    } else if (itemClickedList.item06) {
      setTopImage("./assets/images/gameIntro/main_top06_m.png");
    }
  }, [itemClickedList]);

  return (
    <>
      <div
        ref={ref}
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
            height: isTablet ? 130 : 121,
            position: "relative",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={topImage}
            alt="main_top01_m"
          />
        </div>

        <div
          style={{
            flex: 1,
            background: "#0A0518",
            paddingTop: isTablet ? 6 : 12,
            paddingLeft: 20,
            paddingRight: 14,
            zIndex: 888,
          }}
        >
          <CateogryScroll ref={xScrollRef}>
            <ImageCard
              isTablet={isTablet}
              src={
                itemClickedList.item01
                  ? "./assets/images/gameIntro/main_mini01.png"
                  : "./assets/images/gameIntro/main_mini01_d.png"
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
              isTablet={isTablet}
              src={
                itemClickedList.item02
                  ? "./assets/images/gameIntro/main_mini02.png"
                  : "./assets/images/gameIntro/main_mini02_d.png"
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
              isTablet={isTablet}
              src={
                itemClickedList.item03
                  ? "./assets/images/gameIntro/main_mini03.png"
                  : "./assets/images/gameIntro/main_mini03_d.png"
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
              isTablet={isTablet}
              src={
                itemClickedList.item04
                  ? "./assets/images/gameIntro/main_mini04.png"
                  : "./assets/images/gameIntro/main_mini04_d.png"
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
              isTablet={isTablet}
              src={
                itemClickedList.item05
                  ? "./assets/images/gameIntro/main_mini05.png"
                  : "./assets/images/gameIntro/main_mini05_d.png"
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
                isTablet={isTablet}
                style={{
                  marginRight: 0,
                }}
                src="./assets/images/gameIntro/main_mini06.png"
                alt="main_mini06"
              />
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  color: "#D9D9D9",
                  textAlign: "center",
                  left: "50%",
                  transform: "translate(-50%, 0%)",
                  fontFamily: "Pretendard",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                <div>COMING</div>
                <div>SOON</div>
              </div>
            </div>
          </CateogryScroll>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: isTablet ? 20 : 34,
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
                    src={"./assets/icons/windows.png"}
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
                    src={"./assets/icons/apple.png"}
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
                    src={"./assets/icons/android.png"}
                    alt="android"
                  />
                ) : null}
              </div>
            </Container>
          </div>

          <div
            style={{
              marginTop: isTablet ? 8 : 14,
              marginBottom: isTablet ? 12 : 24,
            }}
          >
            <img
              onClick={() => {
                if (itemData.youtube?.link === "") {
                  return;
                }

                window.open(itemData.youtube?.link, "_blank");
              }}
              style={{
                cursor: "pointer",
                width: "100%",
                height: isTablet ? 310 : 183,
              }}
              src={itemData.youtube?.url}
              alt="slider"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
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
              marginTop: 12,
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
                        onClick={() => {
                          if (item.link === "") {
                            return;
                          }

                          window.open(item.link, "_blank");
                        }}
                        style={{
                          cursor: "pointer",
                          width: "100%",
                          height: isTablet ? 310 : 178,
                        }}
                        src={item.url}
                        alt="slider"
                      />
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
export default GameIntroM;
