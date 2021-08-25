import * as S from "./styles";
import { Row, Accordion } from "react-bootstrap";

const questions = [
  {
    question: "A Best Lead está adequada a LGPD?",
    answer: `A Lei Geral de Proteção de Dados (LGPD) prevê normas para o fornecimento e o tratamento de dados pessoais (Pessoa Física), exclusivamente. A Best Lead fornece lista de contatos contendo dados corporativos públicos abertos do Governo Federal, logo, quem contrata nosso serviço está em conformidade com a LGPD.`,
  },
  {
    question: "Quais são as fontes de dados utilizadas pela Best Lead?",
    answer:
      "Atualmente utilizamos a base pública da Receita Federal do Brasil.",
  },
  {
    question: "Qual a periodicidade de atualização das informações?",
    answer:
      "As informações são atualizadas mensalmente, seguindo o mesmo calendário da Receita Federal.",
  },
  {
    question: "Quais informações relacionadas às empresas terei acesso?",
    answer:
      "Todas as informações cadastrais públicas existentes e disponibilizadas pela Receita Federal, como CNPJ, Razão Social, Nome Fantasia, Natureza Jurídica, Ramo de Atividade (CNAE), Endereço, Telefone e E-mail Comercial, e mais.",
  },
  {
    question: "Há fidelização na contratação do serviço?",
    answer:
      "A Lei Geral de Proteção de Dados (LGPD) prevê normas para o fornecimento e o tratamento de dados pessoais (Pessoa Física), exclusivamente. A Best Lead fornece lista de contatos contendo dados corporativos públicos abertos do Governo Federal, logo, quem contrata nosso serviço está em conformidade com a LGPD.",
  },
  {
    question: "É exigida um contratação mínima mensal?",
    answer:
      "Na Best Lead você contrata o plano que melhor atende o seu orçamento e necessidade.",
  },

  {
    question: "Quais são as formas de pagamento?",
    answer:
      "O pagamento poderá ser realizado através de boleto bancário ou pix.",
  },
  {
    question: "O que é uma plataforma SaaS?",
    answer:
      "Software as a Service, é uma forma de disponibilizar soluções de tecnologia por meio da internet, como um serviço. Com esse modelo, sua empresa não precisa instalar, manter e atualizar hardwares ou softwares. O acesso é fácil e simples: apenas é necessária a conexão com a internet.",
  },
];

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
        {questions.map((q, i) => {
          return (
            <Accordion.Item eventKey={`${i}`} key={i}>
              <Accordion.Header>{q.question}</Accordion.Header>
              <Accordion.Body>{q.answer}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
};

export default AskedQuestions;
