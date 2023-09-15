import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './GameDetails.css';

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
    fetchGameDetails();
  }, [gameID]);

  return (
    <div className="game-details-container">
      {gameDetails ? (
        <div>
          <h2 className="game-details-title">{gameDetails.info.title}</h2>
          <p className="game-details-steam-app-id">
            Steam App ID:
            {' '}
            {gameDetails.info.steamAppID}
          </p>
          <img
            src={gameDetails.info.thumb}
            alt={gameDetails.info.title}
            className="game-details-image"
          />
          <h3 className="game-details-deals-title">Deals:</h3>
          <ul className="game-details-deals-list">
            {gameDetails.deals.map((deal) => (
              <li key={deal.dealID} className="game-details-deal-item">
                <p className="game-details-price" data-testid="price">
                  {' '}
                  Price:
                  {deal.price}
                </p>
                <p className="game-details-retail-price" data-testid="retail-price">
                  {' '}
                  Retail Price:
                  {deal.retailPrice}
                </p>
                <p className="game-details-savings">
                  Savings:
                  {deal.savings}
                  %
                </p>
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
