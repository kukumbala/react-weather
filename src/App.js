import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Alex and is{" "}
          <a
            href="https://github.com/kukumbala/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced by GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
