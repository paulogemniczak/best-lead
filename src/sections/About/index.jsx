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

const videoData = [
  {
    videoId: "ZP_2ZDWY67w",
    videoImageSource: Youtube1,
    videoAlt: "Thumbnail Youtube video 1",
    videoTitle: "1. Realize seu cadastro.",
  },
  {
    videoId: "tQ9-S9aPgVI",
    videoImageSource: Youtube2,
    videoAlt: "Thumbnail Youtube video 2",
    videoTitle: "2. Acesse a plataforma.",
  },
  {
    videoId: "mgKSQbsdN5o",
    videoImageSource: Youtube3,
    videoAlt: "Thumbnail Youtube video 3",
    videoTitle: "3. Avalie a seleção efetuada.",
  },
  {
    videoId: "KVyHsvi2Jng",
    videoImageSource: Youtube4,
    videoAlt: "Thumbnail Youtube video 4",
    videoTitle: "4. Exporte sua lista de contatos.",
  },
];

const About = () => {
  const [videoIsOpen, setVideoIsOpen] = useState(false);
  const [videoId, setVideoId] = useState("ZP_2ZDWY67w");

  async function openVideo(e, videoIdSelected) {
    e.preventDefault();
    setVideoId(videoIdSelected);
    setVideoIsOpen(true);
    return;
  }

  return (
    <motion.div initial="initial" animate="animate">
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
        {videoData.map((v, i) => (
          <Col key={i} sm={12} md={12} lg={3} xl={3} xxl={3} className="my-5 text-center">
            <motion.div variants={fadeInUp}>
              <S.ImageContent onClick={(e) => openVideo(e, v.videoId)}>
                <GoPlay size={42} />
                <Image
                  layout="intrinsic"
                  placeholder="blur"
                  src={v.videoImageSource}
                  alt={v.videoAlt}
                />
              </S.ImageContent>
              <S.VideoTitle className="mt-2">
                {v.videoTitle}
              </S.VideoTitle>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default About;
