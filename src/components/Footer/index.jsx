import { useState } from 'react';
import * as S from "./styles";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <S.Wrapper>
      <p>
        © Copyright {year} &nbsp;|&nbsp;&nbsp;&nbsp;TODOS OS
        DIREITOS RESERVADOS{" "}
      </p>
    </S.Wrapper>
  );
};
export default Footer;
