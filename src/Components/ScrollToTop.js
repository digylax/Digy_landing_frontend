import AOS from "aos";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
  const { children } = props;

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [location]);

  return <div>{children}</div>;
};

export default ScrollToTop;
