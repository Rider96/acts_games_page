import React, { useState, useEffect } from "react";
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

function ContactM() {
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
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div
            style={{
              height: 361,
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
          </div>
          <div
            style={{
              background: "#21839C",
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,
              paddingBottom: 24,
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
                  width: 48.23,
                  height: 18.71,
                }}
                src={"./assets/icons/logo03.png"}
                alt="logo03"
              />
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 24,
                  fontFamily: "Pretendard",
                  color: "#FFFFFF",

                  marginLeft: 8,
                }}
              >
                GAMES
              </div>
            </div>
            <div
              style={{
                fontWeight: 500,
                fontSize: 13,
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
          <div
            style={{
              flex: 1,
              position: "relative",
              backgroundImage: `url("./assets/images/contact_bg_m.png")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              paddingBottom: 160,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 48,
                  marginBottom: 49,
                  paddingLeft: 19,
                  paddingRight: 13,
                }}
              >
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    fontFamily: "Pretendard",
                    color: "white",
                    paddingRight: 15,
                  }}
                >
                  Contact
                </div>
                <div
                  style={{
                    flex: 1,
                    border: "1px solid #444444",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 28,
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
                      marginBottom: 3,
                      fontSize: 20,
                      fontWeight: 700,
                      fontFamily: "Pretendard",
                      color: "white",
                    }}
                  >
                    {t("contact_recruiting")}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
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
                  marginTop: 40,
                  paddingLeft: 28,
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
                      marginBottom: 3,
                      fontSize: 20,
                      fontWeight: 700,
                      fontFamily: "Pretendard",
                      color: "white",
                    }}
                  >
                    {t("contact_business")}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
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
                  marginTop: 40,
                  paddingLeft: 28,
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
                      marginBottom: 3,
                      fontSize: 20,
                      fontWeight: 700,
                      fontFamily: "Pretendard",
                      color: "white",
                    }}
                  >
                    {t("contact_others")}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
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
}

export default ContactM;
