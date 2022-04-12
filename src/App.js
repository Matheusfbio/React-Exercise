import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    getArtists().then((data) => setArtists(data));
  });

  const [albums, setAlbums] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState();
  //const [photos, setPhotos] = useState();

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

  // need to ask a parameter with artist values
  // why assign something to a function call? it doesn't make sense!
  // here you need to call await getAlbuns(artist.id)
  // assign it to a variable like in the line 15
  // use this variable to pass to setAlbuns, like setAlbuns(data
  async function handleClick(artist) {
    const getAlb = await getAlbums(artist.id);
    const Albums = getAlb.map((obj) => obj.title);
    setAlbums(Albums);
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
        <h2>Albums of {selectedArtist}</h2>
        <ul>
          {albums.map((alb) => (
            <li>
              <div>
                <strong>Title:</strong> {alb}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
