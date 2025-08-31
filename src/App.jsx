import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SongList from './components/songList/songList';

function App() {
  const [displaySongs, setDisplaySongs] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [songValue, setSongValue] = useState('');
  const [songQuery, setSongQuery] = useState('');

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://itunes.apple.com/search?term=${songQuery}&entity=song&limit=12`).then(res => res.json());
        setDisplaySongs(response.results)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchSongs();
  }, [songQuery]);

  if(error) return <h1>There was an error: {error}</h1>
  if(loading) return <h1>Loading...</h1>

  return (
    <>
    <section className='search-section'>
      <form onSubmit={(e) => {
        e.preventDefault()

        setSongQuery(songValue)
      }}>
        <input type="text" value={songValue} onChange={(e) => setSongValue(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </section>
    <SongList displaySongs={displaySongs} likedSongs={likedSongs} setLikedSongs={setLikedSongs} />
    </>
  );
}

export default App
