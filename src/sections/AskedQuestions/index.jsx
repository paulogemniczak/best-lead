import * as S from './styles';
import {Row, Accordion} from 'react-bootstrap';

const AskedQuestions = () => {
  return (
    <>
      <Row className="flex-column w-100  justify-content-center align-items-center mt-5">
        <S.Title className="text-center justify-content-center">
          Dúvidas frequentes
        </S.Title>
        <S.Line />
      </Row>
      <Accordion className="w-100 mt-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>A Best Lead está adequada a LGPD?</Accordion.Header>
          <Accordion.Body>
            A Lei Geral de Proteção de Dados (LGPD) prevê normas para o
            fornecimento e o tratamento de dados pessoais (Pessoa Física),
            exclusivamente. A Best Lead fornece lista de contatos contendo dados
            corporativos públicos abertos do Governo Federal, logo, quem
            contrata nosso serviço está em conformidade com a LGPD.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Há fidelização na contratação do serviço?
          </Accordion.Header>
          <Accordion.Body>
            Neste momento não estamos trabalhando com fidelização em nossos
            planos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            É exigida um contratação mínima mensal?
          </Accordion.Header>
          <Accordion.Body>
            Na Best Lead você contrata o plano que melhor atende o seu orçamento
            e necessidade.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Quais são as fontes de dados utilizadas pela Best Lead?
          </Accordion.Header>
          <Accordion.Body>
            Atualmente utilizamos a base pública da Receita Federal do Brasil
            (RFB).
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AskedQuestions;
