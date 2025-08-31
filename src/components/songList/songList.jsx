import { useState } from "react"
import SongCard from "../songCard/songCard";
import './songList.css'

const SongList = ({displaySongs, likedSongs, setLikedSongs}) => {

    return(
        <>
            <section className="songs-container">
                {displaySongs.map((song) => {
                    return (
                    <div key={song.trackId}>
                        <SongCard song={song} />
                        <button onClick={() => likedSongs.includes(song) ? null : setLikedSongs([...likedSongs, song])}>
                            Like
                        </button>
                    </div>
                )})}
            </section>
            <h2>Liked Songs</h2>
            <section className="songs-container">
                {likedSongs.map((song) => (
                    <div key={song.trackId}>
                        <SongCard song={song} />
                        <button onClick={() => setLikedSongs(likedSongs.filter((s) => s.trackId !== song.trackId))}>
                            Unlike
                        </button>
                    </div>
                ))}
            </section>
        </>
    )
}

export default SongList;