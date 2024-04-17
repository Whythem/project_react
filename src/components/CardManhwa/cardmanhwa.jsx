/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./cardmanhwa.scss";
import Spinner from "../Spinner/spinner";

function CardManhwa(props) {
  var cheminFocus = "/focus/" + props.key;
  console.log(props.manhwa);
  const [affiche, setAffiche] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Referer': 'https://www.webtoons.com/',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 8.1.0; Mi MIX 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Mobile Safari/537.36'
      }
    };

    
    fetch("https://webtoon-phinf.pstatic.net" + props.manhwa.displayRecommendImageUrl, options)
      
  }, []);

  return (
    <>
    {
      <div className="manhwa">
        <a href={cheminFocus}>
          <img src={affiche} alt={props.manhwa.title} />
          <h5>{props.manhwa.title}</h5>
        </a>
      </div>
    }
    </>
  )
}

export default CardManhwa;