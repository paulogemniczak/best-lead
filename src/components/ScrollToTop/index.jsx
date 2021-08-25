import React, { useState, useEffect } from "react";
import * as S from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoIosArrowUp } from "react-icons/io";
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 150) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  return (
    <AnchorLink offset="150" href='#services'>
      <S.ScrollTop>
        <IoIosArrowUp size={20} />
      </S.ScrollTop>
    </AnchorLink>
  );
};

export default ScrollToTop;
