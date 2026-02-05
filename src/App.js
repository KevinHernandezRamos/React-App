import { useState } from 'react';
import profile from './profile.jpeg';
import './App.css';
import Documentacion from './Documentacion';

function App() {
  const [mostrarDoc, setMostrarDoc] = useState(false);

  if (mostrarDoc) {
    return <Documentacion volver={() => setMostrarDoc(false)} />;
  }
  return (
    <div className="App">
      <div className="container">
        <img src={profile} alt="perfil" className="profile-img" />

        <h1>Evaluación parcial 1</h1>

        <h2>Alumno(a):Kevin Hernandez Ramos</h2>

        <a
          href="https://www.linkedin.com/in/kevin-jovany-hernandez-ramos-325b283a4/    "
          target="_blank"
          rel=""
          className="link"
        >
          LINKED IN DE MI PROFILE
        </a>

        <a onClick={() => setMostrarDoc(true)} className="link">
          DOCUMENTACION PARCIAL 1
        </a>
      </div>
    </div>
  );
}

export default App;