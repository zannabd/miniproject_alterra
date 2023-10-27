import { useState, useEffect } from "react";

import styled from "styled-components";

const StyledArrow = styled.div`
  /* ScrollToTopButton.css */
  .scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #007bff;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .scroll-to-top .arrow {
    border: solid #fff;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(-135deg);
  }
`;
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <StyledArrow>
      <div>
        {isVisible && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <i className="arrow up"></i>
          </div>
        )}
      </div>
    </StyledArrow>
  );
};

export default ScrollToTopButton;
