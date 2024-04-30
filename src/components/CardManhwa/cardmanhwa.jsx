/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import "./cardmanhwa.scss";
// import logo from "../../assets/ExempleImage.jpg";s
// import Spinner from "../Spinner/spinner";

function CardManhwa(props) {
  var cheminFocus = "/focus/" + props.manhwa.mal_id;

  return (
    <div className="manhwa">
      <a href={cheminFocus}>
        <div className="image-container">
          <div className="chapter-count" style={{ backgroundColor: props.manhwa.finished ? "#57737A" : "#D4F5F5" }}>
            <p>{props.manhwa.chapters || "?"}</p>
          </div>
          <img className="image" src={props.manhwa.images.webp.image_url} alt={props.manhwa.title} />
          <div className="overlay">
            <h3 className="title lato-bold">{props.manhwa.title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CardManhwa;