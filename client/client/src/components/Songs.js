import React, { useState, useRef, useEffect } from 'react';
import './Songs.css';


const Songs = () => {
    const [isPlaying, setPlaying] = useState(false);
    const [playlistVisible, setPlaylistVisible] = useState(false);
    const [currentSong, setCurrentSong] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showAddSongPopup, setShowAddSongPopup] = useState(false);

    const toggleAddSongPopup = () => {
        setShowAddSongPopup(!showAddSongPopup);
    };



    const audioRef = useRef(null);
    const totalsongs = [
        {
            title: 'Jalsa',
            audio: require('./1.mp3'),
            cover: 'https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/jalsa-524.jpg',
        },
        {
            title: 'Heart is beating',
            audio: require('./2.mp3'),
            cover: 'https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/jalsa-524.jpg',
        },
        {
            title: 'Cherry cherry lady',
            audio: require('./3.mp3'),
            cover: 'https://i.pinimg.com/originals/8a/b5/00/8ab500599776df15138eeac89c3e2c9b.jpg',
        },
        {
            title: 'Animal',
            audio: require('./4.mp3'),
            cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg',
        },
        // {
        //     title: 'Dheevara',
        //     audio: require('./5.mp3'),
        //     cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg',
        // },

    ];

    const intplaylist = [
        {
            title: 'Jalsa',
            audio: require('./1.mp3'),
            cover: 'https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/jalsa-524.jpg',
        },
        {
            title: 'Heart is beating',
            audio: require('./2.mp3'),
            cover: 'https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/jalsa-524.jpg',
        },

        // Add more playlist as needed
    ];
    const [playlist, setPlaylist] = useState(intplaylist);
    const [totsongs, settotsongs] = useState(totalsongs);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        const results = totsongs.filter(song =>
            song.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchResults(results);
    };
    const addToPlaylist = (song) => {
        setPlaylist([...playlist, song]);
    };


    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!isPlaying);
    };

    const handlePrevious = () => {
        setCurrentSong((prevSong) => (prevSong === 0 ? playlist.length - 1 : prevSong - 1));
    };

    const handleNext = () => {
        setCurrentSong((prevSong) => (prevSong === playlist.length - 1 ? 0 : prevSong + 1));
    };
    useEffect(() => {
        if (playlist.length === 0) {
            setPlaying(false);
            setCurrentSong(0);

        }
    }, [playlist]);

    const removeFromPlaylist = (index) => {
        setPlaylist(currentPlaylist => {
            const newPlaylist = currentPlaylist.filter((_, i) => i !== index);
            if (index === currentSong || index === currentPlaylist.length - 1) {

                const newCurrentSong = currentSong >= newPlaylist.length ? newPlaylist.length - 1 : currentSong;
                setCurrentSong(newCurrentSong);
            }
            return newPlaylist;
        });
    };

    const handleAddSong = (event) => {
        event.preventDefault();
        const newSongTitle = event.target[0].value;
        const newSongFile = event.target[1].files[0];
        const newSongCover = event.target[2].value;

        if (newSongFile) {
            const newSongAudioUrl = URL.createObjectURL(newSongFile);

            const newSong = {
                title: newSongTitle,
                audio: newSongAudioUrl,
                cover: newSongCover,
            };

            settotsongs([...totsongs, newSong]);
            toggleAddSongPopup();
        } else {

            alert("Please select an audio file.");
        }
    };




    const handlePlaylistClick = () => {
        setPlaylistVisible(!playlistVisible);
    };

    const handleSongClick = (index) => {
        if (isPlaying) {
            audioRef.current.pause();
            setPlaying(false);
        }
        setCurrentSong(index);
        audioRef.current.play();
        setPlaying(true);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleDurationChange = () => {
        setDuration(audioRef.current.duration);
    };

    const playNextSong = () => {
        const nextSong = (currentSong + 1) % playlist.length;
        setCurrentSong(nextSong);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.addEventListener('durationchange', handleDurationChange);
            audioRef.current.addEventListener('ended', playNextSong);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
                audioRef.current.removeEventListener('durationchange', handleDurationChange);
                audioRef.current.removeEventListener('ended', playNextSong);
            }
        };
    }, [currentSong, audioRef]);


    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentSong, audioRef]);

    return (
        <div className="music-player">

            <div className="top-controls">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search songs..."
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                <button className="add-song-button" onClick={toggleAddSongPopup}>Add Song</button>
            </div>
            {search && (
                <div className="search-results">
                    <ul>
                        {searchResults.slice(0, 3).map((song, index) => (
                            <li key={index}>
                                <button className="result-button" onClick={() => addToPlaylist(song)}>
                                    {song.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="header">
                <button className="button" onClick={handlePlaylistClick}>
                    ☰ Playlist
                </button>
            </div>
            <div className="music-banner">
                {playlist[currentSong] ? (
                    <>
                        <img src={playlist[currentSong].cover} alt={playlist[currentSong].title} />
                        <h1>{playlist[currentSong].title}</h1>
                    </>
                ) : (
                    <div>No song selected</div>
                )}
            </div>

            <div className="seek-line">
                <div className="time-display">{formatTime(currentTime)}</div>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={(e) => {
                        audioRef.current.currentTime = e.target.value;
                        setCurrentTime(e.target.value);
                    }}
                />
                <div className="time-display">{formatTime(duration)}</div>
            </div>
            <div className="controls">
                <button className="control-button" onClick={handlePrevious}>
                    <i className="fa fa-step-backward"></i> {/* Previous */}
                </button>
                <button className="control-button play-pause" onClick={handlePlayPause}>
                    {isPlaying ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>} {/* Pause or Play */}
                </button>
                <button className="control-button" onClick={handleNext}>
                    <i className="fa fa-step-forward"></i> {/* Next */}
                </button>
            </div>


            <div className={`playlist ${playlistVisible ? 'visible' : ''}`}>
                <button className="close-button" onClick={handlePlaylistClick}>
                    Close
                </button>
                <ul>
                    {playlist.map((song, index) => (
                        <li key={index} onClick={() => handleSongClick(index)}>
                            {song.title}
                            <button class='remove-button' onClick={() => removeFromPlaylist(index)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {showAddSongPopup && (
                <div className="add-song-popup">
                    <button className="close-button" onClick={toggleAddSongPopup}>✖</button>
                    <form onSubmit={handleAddSong}>
                        <input type="text" placeholder="Song Title" required />
                        <input type="file" accept="audio/*" required />
                        <input type="text" placeholder="Cover URL" required />
                        <button type="submit">Add Song</button>
                    </form>
                </div>
            )}



            <audio ref={audioRef} src={playlist[currentSong] ? playlist[currentSong].audio : ''}></audio>

        </div>
    );
};

export default Songs;

