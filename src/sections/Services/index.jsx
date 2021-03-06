import * as S from "./styles";
import { Row, Col } from "react-bootstrap";
import Service from "../../components/Service";
import { FaThumbsUp, FaDollarSign, FaRocket } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const easing = [0.6, -0.5, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Services = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeInUp}>
      <div id="services" className="py-5">
        <S.Title>
          Encontre e gere seus <S.TextPrimary>leads</S.TextPrimary>{" "}
          automaticamente
        </S.Title>
        <S.Subtitle>
          Tenha acesso à todas as empresas do mercado pelo melhor preço e utilizando uma plataforma SaaS.
        </S.Subtitle>
      </div>
      <Row className="mt-5">
        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
          <Service
            serviceIconName={FaThumbsUp}
            serviceTitle="Listas de Empresas Ativas"
            serviceText="Empresas com cadastro ativo na Receita Federal"
          />
        </Col>

        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
          <Service
            serviceIconName={FaDollarSign}
            serviceTitle="Melhor custo/benefício"
            serviceText="Menor custo por lead do mercado entre plataformas SaaS"
          />
        </Col>
        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
          <Service
            serviceIconName={FaRocket}
            serviceTitle="Mais resultados para o seu negócio"
            serviceText="Menos esforço operacional e maior foco em vender"
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <AnchorLink
          offset="140"
          href="#plans"
          className="d-flex justify-content-center align-items-center mt-5"
        >
          <S.Button>Confira nossos planos</S.Button>
        </AnchorLink>
      </Row>
      <Row className="justify-content-center mt-4">
        <S.Button
          onClick={() =>
            window.open("https://app.bestlead.com.br/", "_blank")
          }
          className="outline"
        >
          Teste já
        </S.Button>
      </Row>
    </motion.div>
  );
};

export default Services;
