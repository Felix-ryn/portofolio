import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpeg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Felix Ryan </h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
              Nama saya adalah Felix dan saya tinggal di Kota Malang, Jawa Timur, Indonesia.
              Saya adalah Software Engineer yang sedang menempuh pendidikan di SMK Telkom Malang.
              Saya duduk di bangku kelas 11 dengan pengambilan jurusan RPL 
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#about">About me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://drive.google.com/file/d/10cktiW2uBJbn1JbOTy5k43NOl4oNNPH0/view?usp=sharing">Download CV</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
