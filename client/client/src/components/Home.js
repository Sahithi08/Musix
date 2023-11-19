// import React, { useState } from "react";
// import "./Home.css";

// const Home = () => {
//   const [songs, setSongs] = useState([]);
//   const [newSong, setNewSong] = useState({ title: "", artist: "" });
//   const [selectedSongs, setSelectedSongs] = useState([]);
//   const [selectMode, setSelectMode] = useState(false);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewSong((prevSong) => ({ ...prevSong, [name]: value }));
//   };

//   const handleAddSong = () => {
//     if (newSong.title && newSong.artist) {
//       setSongs((prevSongs) => [
//         ...prevSongs,
//         { id: prevSongs.length + 1, ...newSong },
//       ]);
//       setNewSong({ title: "", artist: "" });
//     }
//   };

//   const handleCheckboxChange = (id) => {
//     setSelectedSongs((prevSelected) => {
//       if (prevSelected.includes(id)) {
//         return prevSelected.filter((selectedId) => selectedId !== id);
//       } else {
//         return [...prevSelected, id];
//       }
//     });
//   };

//   const handleSelectModeToggle = () => {
//     setSelectMode((prevMode) => !prevMode);
//     setSelectedSongs([]);
//   };

//   const handleUpdateSelectedSongs = () => {
//     // Handle the update logic for selected songs
//     console.log("Updating selected songs:", selectedSongs);
//   };

//   return (
//     <div className="home-container">
//       <h1 className="home-title">Music Drive</h1>
//       <div className="search-bar-container">
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search for songs..."
//         />
//       </div>
//       <div className="add-song-form">
//         <input
//           type="text"
//           name="title"
//           value={newSong.title}
//           onChange={handleInputChange}
//           placeholder="Song Title"
//         />
//         <input
//           type="text"
//           name="artist"
//           value={newSong.artist}
//           onChange={handleInputChange}
//           placeholder="Artist"
//         />
//         <button type="button" onClick={handleAddSong}>
//           Add Song
//         </button>
//       </div>
//       <div className="song-list">
//         {songs.map((song) => (
//           <div key={song.id} className="song-item">
//             {selectMode && (
//               <input
//                 type="checkbox"
//                 checked={selectedSongs.includes(song.id)}
//                 onChange={() => handleCheckboxChange(song.id)}
//               />
//             )}
//             <div className="song-details">
//               <p>{song.title}</p>
//               <p>{song.artist}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="select-mode-toggle">
//         <button type="button" onClick={handleSelectModeToggle}>
//           {selectMode ? "Cancel Select" : "Select"}
//         </button>
//         {selectMode && selectedSongs.length > 0 && (
//           <button type="button" onClick={handleUpdateSelectedSongs}>
//             Update Selected
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import "./Home.css"; // You can create a corresponding CSS file for styling

const Home = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "Song 1", artist: "Artist 1" },
    { id: 2, title: "Song 2", artist: "Artist 2" },
    { id: 3, title: "Song 3", artist: "Artist 3" },
  ]);

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
    setSelectedSongs([]); // Clear selected songs when switching modes
  };

  const handleUpdateSelectedSongs = () => {
    // Handle the update logic for selected songs
    console.log("Updating selected songs:", selectedSongs);
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
      <div className="select-mode-toggle">
        <button type="button" onClick={handleSelectModeToggle}>
          {selectMode ? "Cancel Select" : "Select"}
        </button>
        {selectMode && selectedSongs.length > 0 && (
          <button type="button" onClick={handleUpdateSelectedSongs}>
            Update Selected
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;