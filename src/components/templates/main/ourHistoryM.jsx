import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import useDisplay from "../../../hooks/useDisplay";

const CenterContainer = styled.div.attrs((props) => {})`
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  position: relative;
  animation: fadeInDown 1s;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div.attrs((props) => {})`
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  position: relative;
  animation: fadeInDown 1s;

  margin-left: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const DateText = styled.div.attrs((props) => {})`
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  position: relative;
  animation: fadeInDown 1s;

  font-size: 24px;
  font-weight: 700;
  font-family: Pretendard;
  color: white;
  line-height: 16px;
  margin-bottom: 26px;
`;

const NumberText = styled.div.attrs((props) => {})`
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  position: relative;
  animation: fadeInDown 1s;

  font-size: 15px;
  font-weight: 700;
  font-family: Pretendard;
  color: rgb(63, 216, 255);
  margin-right: 22px;
`;

const ContentText = styled.div.attrs((props) => {})`
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  position: relative;
  animation: fadeInDown 1s;

  font-size: 15px;
  font-weight: 400;
  font-family: Pretendard;
  color: rgb(255, 255, 255);
`;

const Circle = styled.div.attrs((props) => {})`
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  position: relative;
  animation: fadeInDown 1s;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: white;
`;

const Line = styled.div.attrs((props) => {})`
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  position: relative;
  animation: fadeInDown 1s;

  width: 1px;
  height: 100%;
  background: #ffffff;
`;

function OurHistoryM() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const { t } = useTranslation();
  const [ranking, setRanking] = useState(0);
  const [setTimer, setSetTimer] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (setTimer > 1800 && ranking < 20) {
      setTimeout(() => {
        if (ranking < 20) {
          setRanking(ranking + 1);
        }
      }, 500);
    }
  }, [ranking, setTimer]);

  const handleScroll = (e) => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const myScroll = e.srcElement.scrollingElement.scrollTop;

    setSetTimer(myScroll);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: 1176,
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundImage: `url("./assets/images/bg_m03.png")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 1176,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              marginLeft: 14,
              marginRight: 30,
            }}
          >
            <div
              style={{
                marginTop: 56,
                marginBottom: 43,
                fontSize: 26,
                fontWeight: 700,
                fontFamily: "Pretendard",
                color: "white",
              }}
            >
              Out History
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              {ranking > 1 ? (
                <CenterContainer
                  style={{
                    height: 256,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Circle />
                  </div>
                  {ranking > 2 ? (
                    <Line />
                  ) : (
                    <div
                      style={{
                        width: 1,
                        height: "100%",
                      }}
                    />
                  )}
                </CenterContainer>
              ) : null}

              <RightContainer>
                {ranking > 1 ? <DateText>2022</DateText> : null}

                {ranking > 2 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <NumberText>01</NumberText>
                    <ContentText>{t("ourHistory_2022_01")}</ContentText>
                  </div>
                ) : null}

                {ranking > 3 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <NumberText>03</NumberText>
                    <ContentText>{t("ourHistory_2022_03")}</ContentText>
                  </div>
                ) : null}

                {ranking > 4 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <NumberText>09</NumberText>
                    <ContentText>{t("ourHistory_2022_09")}</ContentText>
                  </div>
                ) : null}
              </RightContainer>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              {ranking > 5 ? (
                <CenterContainer
                  style={{
                    height: 312,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Circle></Circle>
                  </div>
                  {ranking > 6 ? (
                    <Line />
                  ) : (
                    <div
                      style={{
                        width: 1,
                        height: "100%",
                      }}
                    />
                  )}
                </CenterContainer>
              ) : null}

              <RightContainer>
                {ranking > 5 ? <DateText>2021</DateText> : null}

                {ranking > 6 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <NumberText>01</NumberText>
                    <ContentText>{t("ourHistory_2021_01")}</ContentText>
                  </div>
                ) : null}

                {ranking > 7 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <NumberText>05</NumberText>
                    <ContentText>{t("ourHistory_2021_05")}</ContentText>
                  </div>
                ) : null}

                {ranking > 8 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <NumberText>09</NumberText>
                    <ContentText>{t("ourHistory_2021_09")}</ContentText>
                  </div>
                ) : null}

                {ranking > 9 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <NumberText>11</NumberText>
                    <ContentText>{t("ourHistory_2021_11")}</ContentText>
                  </div>
                ) : null}
              </RightContainer>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              {ranking > 10 ? (
                <CenterContainer
                  style={{
                    height: 246,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Circle></Circle>
                  </div>
                  {ranking > 11 ? (
                    <Line />
                  ) : (
                    <div
                      style={{
                        width: 1,
                        height: "100%",
                      }}
                    />
                  )}
                </CenterContainer>
              ) : null}

              <RightContainer>
                {ranking > 10 ? <DateText>2020</DateText> : null}

                {ranking > 11 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <NumberText>01</NumberText>
                    <ContentText>{t("ourHistory_2020_01")}</ContentText>
                  </div>
                ) : null}

                {ranking > 12 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <NumberText>07</NumberText>
                    <ContentText>{t("ourHistory_2020_07")}</ContentText>
                  </div>
                ) : null}

                {ranking > 13 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <NumberText>12</NumberText>
                    <ContentText>{t("ourHistory_2020_12")}</ContentText>
                  </div>
                ) : null}
              </RightContainer>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              {ranking > 14 ? (
                <CenterContainer
                  style={{
                    height: 15,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Circle />
                  </div>
                  <div
                    style={{
                      width: 1,
                      height: "100%",
                      background: "white",
                    }}
                  />
                </CenterContainer>
              ) : null}

              <RightContainer>
                {ranking > 14 ? <DateText>2019</DateText> : null}

                {ranking > 15 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <NumberText>01</NumberText>
                    <ContentText>{t("ourHistory_20219_01")}</ContentText>
                  </div>
                ) : null}

                {ranking > 16 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <NumberText>07</NumberText>
                    <ContentText>{t("ourHistory_20219_07")}</ContentText>
                  </div>
                ) : null}
              </RightContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurHistoryM;
