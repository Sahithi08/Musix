import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
// hi
// hi2
const Home = () => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState({ title: "", artist: "" });
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [selectMode, setSelectMode] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewSong((prevSong) => ({ ...prevSong, [name]: value }));
  };

  const handleAddSong = () => {
    if (newSong.title && newSong.artist) {
      setSongs((prevSongs) => [
        ...prevSongs,
        { id: prevSongs.length + 1, ...newSong },
      ]);
      setNewSong({ title: "", artist: "" });
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedSongs((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleSelectModeToggle = () => {
    setSelectMode((prevMode) => !prevMode);
    setSelectedSongs([]);
  };

  const handleUpdateSelectedSongs = () => {
    navigate("/song-details", { state: { selectedSongs } });
  };

  const handleDeleteSelectedSongs = () => {
    setSongs((prevSongs) =>
      prevSongs.filter((song) => !selectedSongs.includes(song.id))
    );
    setSelectedSongs([]);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Music Drive</h1>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for songs..."
        />
      </div>
      <div className="add-song-form">
        <input
          type="text"
          name="title"
          value={newSong.title}
          onChange={handleInputChange}
          placeholder="Song Title"
        />
        <input
          type="text"
          name="artist"
          value={newSong.artist}
          onChange={handleInputChange}
          placeholder="Artist"
        />
        <button type="button" onClick={handleAddSong}>
          Add Song
        </button>
      </div>
      <div className="song-list">
        {songs.map((song) => (
          <div key={song.id} className="song-item">
            {selectMode && (
              <input
                type="checkbox"
                checked={selectedSongs.includes(song.id)}
                onChange={() => handleCheckboxChange(song.id)}
              />
            )}
            <div className="song-details">
              <p>{song.title}</p>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="select-mode-toggle">
        <button type="button" onClick={handleSelectModeToggle}>
          {selectMode ? "Cancel" : "Select"}
        </button>
        {selectMode && selectedSongs.length > 0 && (
          <>
            <button type="button" onClick={handleUpdateSelectedSongs}>
              Update
            </button>
            <button type="button" onClick={handleDeleteSelectedSongs}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
