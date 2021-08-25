import { RiInstagramLine, RiFacebookFill } from "react-icons/ri";
import * as S from "./styles";

const SocialMedia = () => {
  return (
    <S.Wrapper className="mt-5">
      <S.Media href="https://www.instagram.com/bestleadoficial/" target="_blank" rel="noreferrer">
        <RiInstagramLine size={32} />
      </S.Media>
      <S.Media href="https://www.facebook.com/bestleadoficial" target="_blank" className="ms-3" rel="noreferrer">
        <RiFacebookFill size={32} />
      </S.Media>
    </S.Wrapper>
  );
};

export default SocialMedia;
