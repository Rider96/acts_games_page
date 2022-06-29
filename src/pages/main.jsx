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
  const [projects, setProjects] = useState(1);

  const aboutUs = React.createRef();
  const gameIntro = React.createRef();
  const ourHistory = React.createRef();
  const news = React.createRef();
  const contact = React.createRef();

  const aboutUsM = React.createRef();
  const gameIntroM = React.createRef();
  const ourHistoryM = React.createRef();
  const newsM = React.createRef();
  const contactM = React.createRef();

  useEffect(() => {
    localStorage.setItem("langType", "ko");
  }, []);

  const onAboutUslick = (clickedCount) => {
    if (isSmall) {
      switch (clickedCount) {
        case 1:
          aboutUsM.current?.scrollIntoView({ behavior: "smooth" });
          break;

        case 2:
          gameIntroM.current?.scrollIntoView({ behavior: "smooth" });
          break;

        case 3:
          ourHistoryM.current?.scrollIntoView({ behavior: "smooth" });
          break;

        case 4:
          newsM.current?.scrollIntoView({ behavior: "smooth" });
          break;

        case 5:
          contactM.current?.scrollIntoView({ behavior: "smooth" });
          break;
      }
    } else {
      switch (clickedCount) {
        case 1:
          aboutUs.current?.scrollIntoView({ behavior: "smooth" });
          break;

        case 2:
          gameIntro.current?.scrollIntoView({ behavior: "smooth" });
          break;

        case 3:
          ourHistory.current?.scrollIntoView({ behavior: "smooth" });
          break;

        case 4:
          news.current?.scrollIntoView({ behavior: "smooth" });
          break;

        case 5:
          contact.current?.scrollIntoView({ behavior: "smooth" });
          break;
      }
    }
  };

  return (
    <>
      <div>
        {isSmall ? (
          <div>
            <HeaderM setProjects={setProjects} onAboutUslick={onAboutUslick} />
            <MainVideoM />
            <AboutUsM ref={aboutUsM} />
            <GameIntroM projects={projects} ref={gameIntroM} />
            <OurHistoryM ref={ourHistoryM} />
            <NewsM ref={newsM} />
            <ContactM ref={contactM} />
            <FooterM />
          </div>
        ) : isDesktop ? (
          <div>
            <Header setProjects={setProjects} onAboutUslick={onAboutUslick} />
            <MainVideo />
            <AboutUs ref={aboutUs} />
            <GameIntro projects={projects} ref={gameIntro} />
            <OurHistory ref={ourHistory} />
            <News ref={news} />
            <Contact ref={contact} />
            <Footer />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Main;
