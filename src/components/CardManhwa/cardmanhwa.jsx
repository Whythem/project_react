/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import "./cardmanhwa.scss";
import logo from "../../assets/ExempleImage.jpg";
// import Spinner from "../Spinner/spinner";

function CardManhwa(props) {
  var cheminFocus = "/focus/" + props.manhwa.titleNo;

  return (
    <div className="manhwa">
      <a href={cheminFocus}>
        <div className="image-container">
          <div className="chapter-count" style={{ backgroundColor: props.manhwa.finished ? "#57737A" : "#D4F5F5" }}>
            <p>100</p>
          </div>
          <img className="image" src={logo} alt={props.manhwa.title} />
          <div className="overlay">
            <h5 className="title">{props.manhwa.title}</h5>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CardManhwa;