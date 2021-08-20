import * as S from "./styles";
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <S.Wrapper>
      <S.Title>Fale conosco</S.Title>
      <S.Subtitle>Saiba mais sobre a Best Lead</S.Subtitle>
      <S.Button onClick={() => window.open("https://api.whatsapp.com/send?phone=5541992238152", "_blank")}> <FaWhatsapp size={24} className="me-2" />Chama no WhatsApp</S.Button>
    </S.Wrapper>
  );
};
export default Contact;
