import React from "react";
import { useLocation } from "react-router-dom";

const SongDetailsPage = () => {
  const location = useLocation();
  const selectedSongs = location.state?.selectedSongs || [];

  return (
    <div>
      <h1>Song Details Page</h1>
      <div>
        <h2>Selected Songs:</h2>
        <ul>
          {selectedSongs.map((songId) => (
            <li key={songId}>{songId}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SongDetailsPage;
