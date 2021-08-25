import * as S from "./styles";
import { Container } from "react-bootstrap";
import Services from "../../sections/Services";
import About from "../../sections/About";
import AskedQuestions from "../../sections/AskedQuestions";
import Plans from "../../sections/Plans";
import Contact from "../../sections/Contact";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

export default function Main() {
  return (
    <>
      <Container>
        <S.Section className="first-section">
          <Services />
        </S.Section>
        <S.Section>
          <About />
        </S.Section>
        <S.Section>
          <Plans />
        </S.Section>
        <S.Section>
          <AskedQuestions />
        </S.Section>
      </Container>
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
