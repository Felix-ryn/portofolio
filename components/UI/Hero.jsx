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
        <Row className="align-items-center">
          {/* ========== hero content ============= */}
          <Col lg="6" md="6" className="d-flex" style={{ alignItems: "center" }}>
            <div className={`${classes.hero__content}`} style={{ width: "100%" }}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Felix Ryan </h2>
              <h5 className="mb-4">Backend Developer and Data Engineer</h5>
              <p>
                Saya Felix Ryan Agusta, mahasiswa Sains Data Terapan di Politeknik Elektronika Negeri Surabaya dan alumni SMK Telkom Malang jurusan Rekayasa Perangkat Lunak. Saya memiliki ketertarikan besar pada Data Engineering dan Backend Development, serta terus mengembangkan kemampuan dalam pengolahan data, database, dan API. Saya antusias berkontribusi dalam proyek teknologi yang menantang dan berdampak nyata.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#about">About me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://drive.google.com/file/d/1lsZdnESIlbRiOK1EFc1y7_xqfUb1LXVT/view?usp=sharing">
                    Download CV
                  </Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6" className="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
            <div
              className={`${classes.hero__img} text-end`}
              style={{
                overflow: "hidden",
                borderRadius: "40px",
                width: "100%",
                maxWidth: "350px", // batas maksimum di HP
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                alt="hero-image"
                src={heroImg}
                fill
                style={{
                  objectFit: "cover",
                  transform: "scale(1.2)"
                }}
                sizes="(max-width: 768px) 100vw, 350px"
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
