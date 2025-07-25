import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              Terimakasih banyak sudah mengunjungi website yang saya miliki 
              Apabila ada saran bisa kamu cantumkan pada form ini
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Surabaya - East Java</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>felixagusta24@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+62 817-9482-485</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
            <Link href="https://github.com/Felix-ryn">
                <i className="ri-github-line"></i>
              </Link>
            <Link href="https://www.instagram.com/felixryn_/">
                <i className="ri-instagram-line"></i>
              </Link>
              <Link href="https://www.youtube.com/channel/UCxnMnJB_Mm03_j37AEDIQ5g">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="https://www.facebook.com/felix.r.agusta/">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/felix-ryan-agusta-4ab72927a/">
                <i className="ri-linkedin-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
