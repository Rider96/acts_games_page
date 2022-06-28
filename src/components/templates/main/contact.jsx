import React, { useState, useEffect, forwardRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import GoogleMapReact from "google-map-react";

import useDisplay from "../../../hooks/useDisplay";

const AnyReactComponent = ({ text }) => (
  <div>
    <img
      style={{
        width: 30,
        height: 30,
      }}
      src="./assets/icons/markers02.png"
      alt="marker"
    />
  </div>
);

const Contact = forwardRef((props, ref) => {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <div
        ref={ref}
        style={{
          width: "100%",
          height: 574,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: 574,
          }}
        >
          <div
            style={{
              flex: 1,
              position: "relative",
            }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyD8qKC_Eu7JqoiTXGCmSOJJ0s9L0qEoSg8",
              }}
              defaultCenter={{
                lat: 59.95,
                lng: 30.33,
              }}
              defaultZoom={11}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>

            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                background: "#21839C",
                paddingLeft: 32,
                paddingRight: 47,
                paddingTop: 27,
                paddingBottom: 25,
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
                    width: 67,
                    height: 26,
                  }}
                  src={"./assets/icons/logo03.png"}
                  alt="logo03"
                />
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 30,
                    fontFamily: "Pretendard",
                    color: "#FFFFFF",

                    marginLeft: 9,
                  }}
                >
                  GAMES
                </div>
              </div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  fontFamily: "Pretendard",
                  color: "#FFFFFF",
                  lineHeight: "20px",
                  marginTop: 8,
                }}
              >
                <div>129-2, Samseong-dong, Gangnam-gu, Seoul,</div>
                <div>135090, Republic of Korea,</div>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              position: "relative",
              backgroundImage: `url("./assets/images/contact_bg.png")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 102,
              }}
            >
              <div
                style={{
                  marginTop: 60,
                  marginBottom: 30,
                  fontSize: 50,
                  fontWeight: 700,
                  fontFamily: "Pretendard",
                  color: "white",
                }}
              >
                Contact
              </div>
              <div
                style={{
                  border: "1px solid #444444",
                  width: "80%",
                  marginBottom: 42,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: 34,
                    height: 34,
                    marginRight: 25,
                  }}
                  src={"./assets/icons/recruiting.png"}
                  alt="recruiting"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      marginBottom: 5,
                      fontSize: 22,
                      fontWeight: 700,
                      fontFamily: "Pretendard",
                      color: "white",
                    }}
                  >
                    {t("contact_recruiting")}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "white",
                    }}
                  >
                    {t("contact_recruiting_content")}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 64,
                }}
              >
                <img
                  style={{
                    width: 34,
                    height: 34,
                    marginRight: 25,
                  }}
                  src={"./assets/icons/business.png"}
                  alt="business"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      marginBottom: 5,
                      fontSize: 22,
                      fontWeight: 700,
                      fontFamily: "Pretendard",
                      color: "white",
                    }}
                  >
                    {t("contact_business")}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "white",
                    }}
                  >
                    {t("contact_business_content")}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 64,
                }}
              >
                <img
                  style={{
                    width: 34,
                    height: 34,
                    marginRight: 25,
                  }}
                  src={"./assets/icons/others.png"}
                  alt="others"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      marginBottom: 5,
                      fontSize: 22,
                      fontWeight: 700,
                      fontFamily: "Pretendard",
                      color: "white",
                    }}
                  >
                    {t("contact_others")}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "white",
                    }}
                  >
                    {t("contact_others_content")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Contact;
