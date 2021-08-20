import * as S from "./styles";
import logo from "../../../public/img/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <S.Wrapper>
      <Image
        layout="intrinsic"
        placeholder="blur"
        src={logo}
        alt="Logo BestLead"
      />
    </S.Wrapper>
  );
};

export default Logo;
