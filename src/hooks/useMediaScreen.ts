import { useEffect, useMemo, useState } from "react";

export default function useMediaScreen() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  // ===> Mobile indicator memoize state
  const isMobile = useMemo(() => {
    if (screenWidth == null) {
      return false;
    } else return screenWidth <= 600; // screen width lower than 600px
  }, [screenWidth]);

  const getScreenDimension = () => {
    setScreenWidth(window.screen.availWidth);
  };

  // Initial hook
  useEffect(() => {
    getScreenDimension();

    window.addEventListener("resize", getScreenDimension);

    return () => window.removeEventListener("resize", getScreenDimension);
  }, []);

  return {
    screen,
    isMobile
  }
}