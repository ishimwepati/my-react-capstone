import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function GameDetails() {
  const { gameID } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  const fetchGameDetails = async () => {
    try {
      const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`);
      setGameDetails(response.data);
    } catch (error) {
      console.error('Error fetching game details', error);
    }
  };

  useEffect(() => {
    // Include fetchGameDetails in the dependency array
    fetchGameDetails();
  }, [gameID, fetchGameDetails]);

  return (
    <div>
      {gameDetails ? (
        <div>
          <h2>{gameDetails.info.title}</h2>
          <p>Steam App ID: {gameDetails.info.steamAppID}</p>
          <img src={gameDetails.info.thumb} alt={gameDetails.info.title} />
          <h3>Deals:</h3>
          <ul>
            {gameDetails.deals.map((deal) => (
              <li key={deal.dealID}>
                <p>Price: {deal.price}</p>
                <p>Retail Price: {deal.retailPrice}</p>
                <p>Savings: {deal.savings}%</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading game details...</p>
      )}
    </div>
  );
}

export default GameDetails;
