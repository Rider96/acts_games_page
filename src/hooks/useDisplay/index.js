import { useState, useEffect, useCallback } from "react";
import _ from "lodash";

const TABLET_MIN_WIDTH = 912;
const DESKTOP_MIN_WIDTH = 1270;

const useDisplay = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDektop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);
    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, []);

  useEffect(() => {
    if (width > DESKTOP_MIN_WIDTH && isNotMatch(false, false, true)) {
      change(false, false, true); // desktop
    } else if (
      width < DESKTOP_MIN_WIDTH &&
      width > TABLET_MIN_WIDTH &&
      isNotMatch(false, true, false)
    ) {
      change(false, true, false); // tablet
    } else if (width < TABLET_MIN_WIDTH && isNotMatch(true, false, false)) {
      change(true, false, false); // mobile
    }
  }, [width]);

  const isNotMatch = useCallback(
    (mobile, tablet, desktop) => {
      return !(
        isMobile === mobile &&
        isTablet === tablet &&
        isDesktop === desktop
      );
    },
    [isMobile, isTablet, isDesktop]
  );

  const windowResizeHandler = _.debounce(() => {
    setWidth(window.innerWidth);
  }, 300);

  const change = (m, t, d) => {
    setIsMobile(m);
    setIsTablet(t);
    setIsDektop(d);
  };

  return { isMobile, isTablet, isDesktop };
};

export default useDisplay;
