import "./Styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    getArtists().then((data) => setArtists(data));
  },[]);

  const [albums, setAlbums] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState();
  

  async function getArtists() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  }

  async function getAlbums(id) {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${id}`
    );
    return data;
  }
  

  async function handleClick(artist) {
   
    const albums = await getAlbums(artist.id);
    const albumsTitle = albums.map((obj) => obj.title);
    setAlbums(albumsTitle);
    setSelectedArtist(artist.name);
  }

  return (
    <div className="App">
      <h1>Fake Music Database</h1>
      <section>
        <h2>Artists</h2>
        <ul>
          {artists.map((artist) => (
            <li>
              <div>{artist.name}</div>
              <div>{artist.website}</div>
              <button type="button" onClick={() => handleClick(artist)}>
                Get Albums
              </button>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section>
        {albums.length > 0  && <h2>Album of {selectedArtist}</h2>}
         <ul>
          {albums.map((album) => (
            <li>
              <div>
                <strong>Title:</strong> {album}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
