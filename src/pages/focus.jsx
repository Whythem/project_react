import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner/spinner";
// import logo from "../assets/ExempleImage.jpg";
import '../css/styles.scss';


export default function Focus() {
  let idManhwa = useParams();

  const [manhwa, setManhwa] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "https://api.jikan.moe/v4/manga/" + idManhwa.id

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setManhwa(data.data)
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
              <img className="grandeImage" src={manhwa.images.webp.image_url} alt={manhwa.title}/>
              <div className="right">
              <div className="top">
                <div className="score">{manhwa.score}</div>
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