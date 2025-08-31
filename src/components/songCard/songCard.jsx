import './songCard.css';

const SongCard = ({song}) => {
    console.log("RENDERING SONG...", song);

    return (
        <div className="song-card">
            <img src={song.artworkUrl100} alt={song.trackName} />
            <h3>{song.trackName}</h3>
            <p>{song.artistName}</p>
        </div>
    );
}

export default SongCard;