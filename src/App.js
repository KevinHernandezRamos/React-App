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

        <h2>Alumno(a): Kevin Hernandez Ramos</h2>

        {/* LINK EXTERNO SEGURO */}
        <a
          href="https://www.linkedin.com/in/kevin-jovany-hernandez-ramos-325b283a4/"
          target="_blank"
          rel="noreferrer noopener"
          className="link"
        >
          LINKEDIN DE MI PERFIL
        </a>

        {/* BOTÓN EN VEZ DE <a> SIN href */}
        <a
          onClick={() => setMostrarDoc(true)}
          className="link"
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer'
          }}
        >
          DOCUMENTACIÓN PARCIAL 1
        </a>
      </div>
    </div>
  );
}

export default App;
