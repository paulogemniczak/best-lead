import Lottie from "lottie-react";
import NotFoundAnimation from "../../public/json/404-animation.json";
import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col sm={6} className="justify-content-center text-center">
          <Lottie
            animationData={NotFoundAnimation}
            loop={true}
            autoPlay={true}
          />
          <h3 className="text-center mt-4">
            <span className="fw-bold">404</span> | Página não encontrada.
          </h3>
          <Link href="/" passHref >
            <a className="text-light fw-bold text-center btn btn-primary btn-lg mt-4">Voltar</a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
