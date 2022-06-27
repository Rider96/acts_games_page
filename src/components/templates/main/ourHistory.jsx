import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import useDisplay from "../../../hooks/useDisplay";

const LeftContainer = styled.div.attrs((props) => {})`
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

  width: 540px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

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

  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 167px;
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

  width: 540px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

  font-size: 40px;
  font-weight: 700;
  font-family: Pretendard;
  color: white;
  line-height: 16px;
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

  font-size: 18px;
  font-weight: 700;
  font-family: Pretendard;
  color: rgb(63, 216, 255);
  margin-right: 23px;
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

  font-size: 18px;
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

const LeftDash = styled.div.attrs((props) => {})`
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

  animation: fadeInDown 1s;

  position: absolute;
  border: 0.6px dashed rgb(217, 217, 217);
  width: 40px;
  top: 6px;
  right: 14px;
`;

const RightDash = styled.div.attrs((props) => {})`
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

  animation: fadeInDown 1s;

  position: absolute;
  border: 0.6px dashed rgb(217, 217, 217);
  width: 40px;
  top: 6px;
  left: 14px;
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

function OurHistory() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const { t } = useTranslation();
  const [ranking, setRanking] = useState(0);
  const [setTimer, setSetTimer] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (setTimer > 2000 && ranking < 20) {
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
          height: 972,
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundImage: `url("./assets/images/bg_pc03.png")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 972,
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
                marginTop: 73,
                marginBottom: 90,
                fontSize: 50,
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
              }}
            >
              {ranking > 1 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <LeftContainer>
                    <DateText>2022</DateText>
                  </LeftContainer>

                  <CenterContainer>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Circle>
                        <LeftDash />
                      </Circle>
                    </div>
                    {ranking > 5 ? (
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
                </div>
              ) : null}

              <RightContainer>
                {ranking > 2 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 14,
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
                      marginBottom: 14,
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
              }}
            >
              <LeftContainer>
                {ranking > 7 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 14,
                    }}
                  >
                    <NumberText>01</NumberText>
                    <ContentText>{t("ourHistory_2021_01")}</ContentText>
                  </div>
                ) : null}

                {ranking > 8 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 14,
                    }}
                  >
                    <NumberText>05</NumberText>
                    <ContentText>{t("ourHistory_2021_05")}</ContentText>
                  </div>
                ) : null}

                {ranking > 9 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 14,
                    }}
                  >
                    <NumberText>09</NumberText>
                    <ContentText>{t("ourHistory_2021_09")}</ContentText>
                  </div>
                ) : null}

                {ranking > 10 ? (
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
              </LeftContainer>

              {ranking > 6 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <CenterContainer
                    style={{
                      height: 199,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Circle>
                        <RightDash />
                      </Circle>
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
                  <RightContainer>
                    <DateText>2021</DateText>
                  </RightContainer>
                </div>
              ) : null}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {ranking > 12 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <LeftContainer>
                    <DateText>2020</DateText>
                  </LeftContainer>
                  <CenterContainer
                    style={{
                      height: 177,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Circle>
                        <LeftDash />
                      </Circle>
                    </div>
                    {ranking > 16 ? (
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
                </div>
              ) : null}

              <RightContainer>
                {ranking > 13 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 14,
                    }}
                  >
                    <NumberText>01</NumberText>
                    <ContentText>{t("ourHistory_2020_01")}</ContentText>
                  </div>
                ) : null}

                {ranking > 14 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 14,
                    }}
                  >
                    <NumberText>07</NumberText>
                    <ContentText>{t("ourHistory_2020_07")}</ContentText>
                  </div>
                ) : null}

                {ranking > 15 ? (
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
              }}
            >
              <LeftContainer>
                {ranking > 18 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 14,
                    }}
                  >
                    <NumberText>01</NumberText>
                    <ContentText>{t("ourHistory_20219_01")}</ContentText>
                  </div>
                ) : null}

                {ranking > 19 ? (
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
              </LeftContainer>

              {ranking > 17 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
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
                      <Circle>
                        <LeftDash />
                      </Circle>
                    </div>

                    <div
                      style={{
                        width: 1,
                        height: "100%",
                      }}
                    />
                  </CenterContainer>
                  <RightContainer>
                    <DateText>2019</DateText>
                  </RightContainer>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurHistory;
