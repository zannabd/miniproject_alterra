import { useState, useEffect } from "react";

import styled from "styled-components";

const StyledArrow = styled.div`

  .scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 50px;
    background: #007bff;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .scroll-to-top .arrow {
    border: solid #fff;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(-135deg);
  }
  @media screen and (min-width: 768px) {
    .scroll-to-top {
        right: 30px;
    }
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
