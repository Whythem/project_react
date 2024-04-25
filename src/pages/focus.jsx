import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner/spinner";
import logo from "../assets/ExempleImage.jpg";
import '../css/styles.scss';


export default function Focus() {
  let idManhwa = useParams();

  const [manhwa, setManhwa] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://webtoon.p.rapidapi.com/canvas/titles/get-info?language=en&titleNo='+ idManhwa.id;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8be1034410msh86769c4d94a197ap19fbd1jsnd0c1de49152a',
        'X-RapidAPI-Host': 'webtoon.p.rapidapi.com'
      }
    };
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data.message.result.titleInfo);
        setManhwa(data.message.result.titleInfo)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])

  return(
    <>
      {
        loading ?
          <Spinner/>
        : 
          <div className="focus-container">
            <div className="content">
              <img className="grandeImage" src={logo} alt={manhwa.title}/>
              <div className="right">
              <div className="top">
                <div className="score">{manhwa.starScoreAverage}</div>
                  <div className="title-date">
                    <h1>{manhwa.title} </h1>
                    <span>Genre : {manhwa.representGenre}</span>
                  </div>
                </div>
                <div className="synopsis">
                  <h2>Synopsis</h2>
                  <p>{manhwa.synopsis}</p>
                </div>
              </div>
            </div>
          </div>

      }
    </>
  )
}