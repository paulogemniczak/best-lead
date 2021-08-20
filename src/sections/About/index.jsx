import React, { useState } from "react";
import * as S from "./styles";
import { Row, Col } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import { GoPlay } from "react-icons/go";
import Image from "next/image";
import Youtube1 from "../../../public/img/youtube1.png";
import Youtube2 from "../../../public/img/youtube2.png";
import Youtube3 from "../../../public/img/youtube3.png";
import Youtube4 from "../../../public/img/youtube4.png";

const About = () => {
  const [videoIsOpen, setVideoIsOpen] = useState(false);
  const [videoId, setVideoId] = useState("T604XBxZP_A");

  async function openVideo(e, videoIdSelected) {
    e.preventDefault();
    setVideoId(videoIdSelected);
    setVideoIsOpen(true);
    return;
  }

  return (
    <>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={videoIsOpen}
          videoId={videoId}
          onClose={() => setVideoIsOpen(false)}
        />
      </React.Fragment>
      <Row className="flex-column justify-content-center align-items-center mt-5">
        <S.Title>Conheça a Best Lead</S.Title>
        <S.Subtitle>Confira abaixo como nossa plataforma funciona.</S.Subtitle>
        <S.Line />
      </Row>
      <Row className="mt-5 d-flex align-items-stretch">
        <Col sm={12} md={12} lg={3} xl={3} xxl={3} className="my-5 text-center">
          <S.ImageContent onClick={(e) => openVideo(e, "StHbpE3wllM")}>
            <GoPlay size={42}  />
            <Image
              layout="intrinsic"
              placeholder="blur"
              src={Youtube1}
              alt="Thumbnail Youtube video 1"
            />
          </S.ImageContent>
          <p style={{ color: "#4c5166" }} className="mt-2">
            1. Realize seu cadastro.
          </p>
        </Col>
        <Col sm={12} md={12} lg={3} xl={3} xxl={3} className="my-5 text-center">
          <S.ImageContent >
            <GoPlay size={42} onClick={(e) => openVideo(e, "T604XBxZP_A")}/>
            <Image
              layout="intrinsic"
              placeholder="blur"
              src={Youtube2}
              alt="Thumbnail Youtube video 2"
            />
          </S.ImageContent>
          <p style={{ color: "#4c5166" }} className="mt-2">
            2. Acesse a plataforma.
          </p>
        </Col>
        <Col sm={12} md={12} lg={3} xl={3} xxl={3} className="my-5 text-center">
          <S.ImageContent onClick={(e) => openVideo(e, "mgKSQbsdN5o")}>
            <GoPlay size={42} />
            <Image
              layout="intrinsic"
              placeholder="blur"
              src={Youtube3}
              alt="Thumbnail Youtube video 3"
            />
          </S.ImageContent>
          <p style={{ color: "#4c5166" }} className="mt-2">
            3. Avalie a seleção efetuada.
          </p>
        </Col>
        <Col sm={12} md={12} lg={3} xl={3} xxl={3} className="my-5 text-center">
          <S.ImageContent onClick={(e) => openVideo(e, "KVyHsvi2Jng")}>
            <GoPlay size={42} />
            <Image
              layout="intrinsic"
              placeholder="blur"
              src={Youtube4}
              alt="Thumbnail Youtube video 4"
            />
          </S.ImageContent>
          <p style={{ color: "#4c5166" }} className="mt-2">
            4. Exporte sua lista de contatos.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default About;