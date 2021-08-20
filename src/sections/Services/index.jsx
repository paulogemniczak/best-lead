import * as S from "./styles";
import { Row, Col } from "react-bootstrap";
import Service from "../../components/Service";
import { FaThumbsUp, FaDollarSign, FaRocket } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Services = () => {
  return (
    <>
      <div id="services" className="py-5">
        <S.Title>
          Encontre e gere seus <S.TextPrimary>leads</S.TextPrimary>{" "}
          automaticamente
        </S.Title>
        <S.Subtitle>
          Tenha acesso a todas as empresas do mercado pelo menor preço.
        </S.Subtitle>
      </div>
      <Row className="mt-5">
        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
          <Service
            serviceIconName={FaThumbsUp}
            serviceTitle="Listas de Empresas Ativas"
            serviceText="Exporte suas listas contendo empresas com situação cadastral ativa na RFB"
          />
        </Col>

        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
          <Service
            serviceIconName={FaDollarSign}
            serviceTitle="Melhor custo/benefício"
            serviceText="Menor custo por lead do mercado"
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
      <Row className="justify-content-center mt-5 py-5">
        <Col sm={12} md={12} lg={8} xl={8} xxl={8}>
          <S.Subtitle>
            Só a Best Lead oferece sua lista de potenciais clientes, pelo menor
            preço do mercado, para ajudar seu negócio ir ainda mais longe.
          </S.Subtitle>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <AnchorLink offset="140" href="#plans">
          <S.Button>Confira nossos planos</S.Button>
        </AnchorLink>
      </Row>
      <Row className="justify-content-center mt-5">
          <S.Button onClick={() => window.open("https://bestleadwebapp.azurewebsites.net/", "_blank")}  className="outline">Teste já</S.Button>
      </Row>
    </>
  );
};

export default Services;
