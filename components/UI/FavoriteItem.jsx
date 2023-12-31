import React from "react";
import classes from "../../styles/favorite-item.module.css";
import Image from "next/image";
import Link from "next/link";


const FavoriteItem = (props) => {
  const { title, img, prodUrl, keyword } = props.item;
  return (
    <div className={`${classes.favorite__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.favorite__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.favorite__img}`}>
        <Image alt="favorite-img" src={img} width="380" height="250" />
      </div>
     
      <div className={`${classes.favorite__live_url} bg-transparent`}>
        <button className="primary__btn_url">
          <a href={prodUrl}>Lihat Selengkapnya</a>
        </button>
      </div>
  
     
    </div>
  );
};

export default FavoriteItem;
