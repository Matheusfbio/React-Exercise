import "./App.css";

//https://jsonplaceholder.typicode.com/users

//https://jsonplaceholder.typicode.com/albums?userId=1

export default function App() {
  return (
    <div className="App">
      <h1>Fake Music Database</h1>
      <section>
        <h2>Artists</h2>
        <ul>
          <li>
            <div>Artist name</div>
            <div>Artist website</div>
            <button>Get Albums</button>
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <h2>Albums of X</h2>
        <ul>
          <li>
            <div>
              <strong>Title:</strong> Album title
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
