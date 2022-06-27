import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Header from "../components/templates/header/header";

import useDisplay from "../hooks/useDisplay";

import MainVideo from "../components/templates/main/mainVideo";
import AboutUs from "../components/templates/main/aboutUs";
import GameIntro from "../components/templates/main/gameIntro";
import OurHistory from "../components/templates/main/ourHistory";
import News from "../components/templates/main/news";
import Contact from "../components/templates/main/contact";
import Footer from "../components/templates/footer/footer";
import HeaderM from "../components/templates/header/headerM";
import MainVideoM from "../components/templates/main/mainVideoM";
import AboutUsM from "../components/templates/main/aboutUsM";
import GameIntroM from "../components/templates/main/gameIntroM";
import OurHistoryM from "../components/templates/main/ourHistoryM";
import NewsM from "../components/templates/main/newsM";
import FooterM from "../components/templates/footer/footerM";
import ContactM from "../components/templates/main/contactM";

function Main() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("langType", "ko");
  }, []);

  return (
    <>
      <div>
        {isSmall ? (
          <div>
            <HeaderM />
            <MainVideoM />
            <AboutUsM />
            <GameIntroM />
            <OurHistoryM />
            <NewsM />
            <ContactM />
            <FooterM />
          </div>
        ) : (
          <div>
            <Header />
            <MainVideo />
            <AboutUs />
            <GameIntro />
            <OurHistory />
            <News />
            <Contact />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default Main;
