import React, { useState, useEffect } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                onChange={e => setLatitude(e.target.value)}
                type="number"
                name="latitude"
                id="latitude"
                value={latitude}
                required
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                onChange={e => setLongitude(e.target.value)}
                type="number"
                name="longitude"
                id="longitude"
                value={longitude}
                required
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/27422266?s=460&v=4"
                alt="Bruno Viveiros"
              />
              <div className="user-info">
                <strong>Bruno Viveiros</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>console.log("Olá, Mundo")</p>
            <a href="https://github.com/BrunoViveiros">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/27422266?s=460&v=4"
                alt="Bruno Viveiros"
              />
              <div className="user-info">
                <strong>Bruno Viveiros</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>console.log("Olá, Mundo")</p>
            <a href="https://github.com/BrunoViveiros">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/27422266?s=460&v=4"
                alt="Bruno Viveiros"
              />
              <div className="user-info">
                <strong>Bruno Viveiros</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>console.log("Olá, Mundo")</p>
            <a href="https://github.com/BrunoViveiros">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/27422266?s=460&v=4"
                alt="Bruno Viveiros"
              />
              <div className="user-info">
                <strong>Bruno Viveiros</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>console.log("Olá, Mundo")</p>
            <a href="https://github.com/BrunoViveiros">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
