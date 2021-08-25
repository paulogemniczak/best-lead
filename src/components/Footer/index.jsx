import { useState } from 'react';
import * as S from "./styles";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <S.Wrapper >
      <div className="d-flex flex-column">
        <p>
          © Copyright {year} &nbsp;|&nbsp;&nbsp;&nbsp;TODOS OS
          DIREITOS RESERVADOS{" "}
        </p>
        <p className="text-center">
          Desenvolvido por <a onClick={() => window.open("https://methods.com.br", "_blank")} target="_blank">Method&apos;s</a>
        </p>
      </div>
    </S.Wrapper>
  );
};
export default Footer;
