import * as S from "./styles";
import { Row, Col } from "react-bootstrap";
import Plan from "../../components/Plan";
const Plans = () => {
  const planData = [
    {
      planName: "Degustação",
      planIntegerPrice: "0",
      planDecimalPrice: "00",
      planTime: "Por Lead",
      planBenefits: [
        "Crédito de 100 leads",
        "Exporte até 100 contatos",
        "Validade 7 dias",
        "Abrangência Nacional",
        "Teste já!",
      ],
    },
    {
      planName: "Avulso",
      planIntegerPrice: "0",
      planDecimalPrice: "50",
      planTime: "Por Lead",
      planBenefits: [
        "Valor por Lead R$ 0,50",
        "Exporte até 999 contatos",
        "Validade 7 dias",
        "Abrangência Nacional",
        "Fale conosco",
      ],
    },
    {
      planName: "Básico",
      planIntegerPrice: "100",
      planDecimalPrice: "00",
      planTime: "Mês",
      planBenefits: [
        "Valor por Lead R$ 0,10",
        "Exporte 1.000 contatos",
        "Validade 30 dias",
        "Abrangência Nacional",
        "Fale conosco",
      ],
    },
    {
      planName: "Avançado",
      planIntegerPrice: "250",
      planDecimalPrice: "00",
      planTime: "Mês",
      planBenefits: [
        "Valor por Lead R$ 0,05",
        "Exporte 5.000 contatos",
        "Validade 30 dias",
        "Abrangência Nacional",
        "Fale conosco",
      ],
    },
    {
      planName: "+ 5.000 Leads?",
      planIntegerPrice: "",
      planDecimalPrice: "",
      planTime: "",
      planBenefits: [
        "Planos adequados para seu negócio",
        "Exportação sob demanda",
        "Validade estendida",
        "Abrangência Nacional",
        "Fale conosco",
      ],
    },
  ];

  return (
    <>
      <Row id="plans" className="flex-column justify-content-center align-items-center mt-5">
        <S.Title>Nossos planos</S.Title>
        <S.Subtitle>
          Confira abaixo nossos preços e escolha o melhor plano para o seu
          negócio.
        </S.Subtitle>
        <S.Line />
        <Row className="mt-5 align-items-center">
          {planData.map((p, index) => (
            <Col key={index} className="d-flex justify-content-center align-items-start mt-3">
              <Plan
                  index={index}
                  planName={p.planName}
                  planIntegerPrice={p.planIntegerPrice}
                  planDecimalPrice={p.planDecimalPrice}
                  planTime={p.planTime}
                  planBenefits={p.planBenefits}
              />
            </Col>
          ))}
        </Row>
      </Row>
    </>
  );
};

export default Plans;
