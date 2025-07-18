import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/favorite.module.css";
import FavoriteItem from "./FavoriteItem";

const favoriteItems = [
  {
    title: "website kasir",
    img: "/images/kasir.jpg",
    prodUrl: "web1",
    keyword: ["kasir", "website"],
    category: "Web Design",
  },
  {
    title: "website resepsionis hotel",
    img: "/images/hotel.jpg",
    prodUrl: "web2",
    keyword: ["hotel", "resepsionis"],
    category: "Web Design",
  },
  {
    title: "website toko bangunan",
    img: "/images/tokobangunan.jpg",
    prodUrl: "web3",
    keyword: ["produk", "website"],
    category: "Web Design",
  },
  {
    title: "UI Aplikasi ayomasak ",
    img: "/images/ayomasak.jpg",
    prodUrl: "ui1",
    keyword: ["mobile", "ui", "design"],
    category: "Mobile App",
  },
];

const Favorite = () => {
  const [filter, setFilter] = useState("Mobile App");
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredData = favoriteItems.filter(
      (item) =>
        (filter === "Mobile App" && item.category === "Mobile App") ||
        (filter === "Web Design" && item.category === "Web Design")
    );
    setData(filteredData);
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="favorite">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My portfolio" />
            <h4 className="mt-4">Some of my works</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === "Mobile App" ? active : ""
                } secondary__btn text-black`}
                onClick={() => setFilter("Mobile App")}
              >
                Mobile App UI-UX
              </button>
              <button
                className={`${
                  filter === "Web Design" ? active : ""
                } secondary__btn text-black`}
                onClick={() => setFilter("Web Design")}
              >
                Web Design
              </button>
            </div>
          </Col>

          {data.map((item, idx) => (
            <Col lg="4" md="4" sm="6" key={idx}>
              <FavoriteItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Favorite;
