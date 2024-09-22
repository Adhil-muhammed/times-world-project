import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsMobile, showMore } from "reduxConfig";

export const useGetWindowSize = () => {
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth <= 768) {
        dispatch(setIsMobile({ isMobile: true }));
      } else {
        dispatch(setIsMobile({ isMobile: false }));
        dispatch(showMore());
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
};
