import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/spinner"

export default function Home() {
  const [manhwa, setManhwa] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://webtoon.p.rapidapi.com/canvas/home?language=fr';
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
        setManhwa(data.message.result.challengeHomeRecommendTitleList)
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
          {console.log(manhwa)}
        </>
      }
    </>
  )
}