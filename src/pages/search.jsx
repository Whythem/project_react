import { useState } from 'react';
import CardManhwa from '../components/CardManhwa/cardmanhwa';
import '../css/styles.scss';

function SearchComponent() {
  const [title, setTitle] = useState('');
  const [results, setResults] = useState([]);
  
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/manga?sfw=true&q=${title}`);
      const data = await response.json();
      setResults(data.data);
    } catch (error) {
      console.error('Erreur lors de la recherche :', error);
    }
  };
  
  return (
    <div className="wrapper">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Entrez le titre de l'œuvre"
      />
      <button onClick={handleSearch}>Rechercher</button>
      
      {results.length > 0 && (
        <div className="populaires-container container">
          <h2>Résultats de la recherche :</h2>
          <div className="grid-tendances">
            {
              results.map((manhwa) => (
                <CardManhwa key={manhwa.mal_id} manhwa={manhwa} />
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
