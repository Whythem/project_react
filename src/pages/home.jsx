import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/spinner";
import CardManhwa from "../components/CardManhwa/cardmanhwa";
import '../css/styles.scss';

export default function Home() {
  const [manhwasPopular, setManhwaPopular] = useState([]);
  const [manhwasRecommendations, setManhwaRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/manga')
      .then(response => response.json())
      .then(data => {
        setManhwaPopular(data.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.message);
      })

    fetch('https://api.jikan.moe/v4/recommendations/manga')
      .then(response => response.json())
      .then(data => {
        setManhwaRecommendations(data.data.slice(0, 25))
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
        <>
          <div className="wrapper">
            <div className="populaires-container container">
              <div className="title-filter" id="title-tendances">
                <h2 className="inter-bold">Most popular</h2>
              </div>
              <div className="grid-tendances">
                {
                  manhwasPopular.map((manhwa) => (
                    <CardManhwa key={manhwa.mal_id} manhwa={manhwa} />
                  ))
                }
              </div>
            </div>
            <div className="populaires-container container">
              <div className="title-filter" id="title-tendances">
                <h2 className="inter-bold">Recommendation</h2>
              </div>
              <div className="grid-tendances">
                {
                  manhwasRecommendations.map((manhwa) => (
                    <CardManhwa key={manhwa.entry[0].mal_id} manhwa={manhwa.entry[0]} />
                  ))
                }
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}