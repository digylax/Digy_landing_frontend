import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaAngleDoubleUp } from "react-icons/fa";

const GoToButton = ({ displayAfter, target }) => {
  const [showButton, setShowButton] = useState(false);
  const handleShowButton = () => {
    if (!showButton && window.scrollY > displayAfter) {
      setShowButton(true);
      return;
    }
    if (!showButton && window.scrollY <= displayAfter) {
      setShowButton(false);
      return;
    }
  };
  window.addEventListener("scroll", handleShowButton);

  useEffect(() => {
    return window.removeEventListener("scroll", handleShowButton);
  });

  const scrollToRef = (target) => {
    window.scrollTo({
      top: target.current.offsetTop,
      behavior: "smooth"
    });
  };

  if (showButton) {
    return <Button variant="primary" className="rounded-pill shadow-sm p-2 fixed-bottom d-flex align-self-end go-top-btn" 
    onClick={() => scrollToRef(target)}>
        <FaAngleDoubleUp size={24} />
    </Button>;
  } else {
    return "";
  }
};
export default GoToButton;