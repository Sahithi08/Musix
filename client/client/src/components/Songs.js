
import React, { useState, useRef, useEffect } from 'react';
import './Songs.css';

const Songs = () => {
    // State hooks
    const [isPlaying, setPlaying] = useState(false);
    const [playlist, setPlaylist] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const audioRef = useRef(null);

    // Sample data for songs
    const songs = [
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
            cover: 'https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/jalsa-524.jpg',
        },
    ];

    // Effect to filter songs based on search term
    useEffect(() => {
        const results = songs.filter(song =>
            song.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, songs]);

    // Function to play a song
    const playSong = (song) => {
        setCurrentSong(song);
        setPlaying(true);
    };

    // Function to add a song to the playlist
    const addToPlaylist = (song) => {
        if (!playlist.includes(song)) {
            setPlaylist([...playlist, song]);
        }
    };

    // Function to remove a song from the playlist
    const removeFromPlaylist = (songId) => {
        setPlaylist(playlist.filter(song => song.id !== songId));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a song..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="song-list">
                {searchResults.map((song) => (
                    <div key={song.id}>
                        <span>{song.title} - {song.artist}</span>
                        <button onClick={() => playSong(song)}>Play</button>
                        <button onClick={() => addToPlaylist(song)}>Add to Playlist</button>
                        <button onClick={() => removeFromPlaylist(song.id)}>Remove from Playlist</button>
                    </div>
                ))}
            </div>
            {currentSong && (
                <audio ref={audioRef} src={currentSong.url} autoPlay={isPlaying}></audio>
            )}
        </div>
    );
};

export default Songs;









 // const songs = [
        // {
        //     title: 'Jalsa',
        //     audio: require('./1.mp3'),
        //     cover: 'https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/jalsa-524.jpg',
        // },
        // {
        //     title: 'Heart is beating',
        //     audio: require('./2.mp3'),
        //     cover: 'https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/jalsa-524.jpg',
        // },
        // {
        //     title: 'Cherry cherry lady',
        //     audio: require('./3.mp3'),
        //     cover: 'https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/jalsa-524.jpg',
        // },
    //     // Add more songs as needed
    // ];