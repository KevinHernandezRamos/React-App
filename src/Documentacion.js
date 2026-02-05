import './Documentacion.css';

function Documentacion({ volver }) {
  return (
    <div className="doc-container">
      <div className="doc-card">
        <h1>Centro de Descargas</h1>
        <p>Haz clic en los botones para obtener tus archivos PDF.</p>

        <a href="/comandos.pdf" download className="btn blue">
          COMANDOS BÁSICOS DE REACT
        </a>

        <a href="/ieee.pdf" download className="btn green">
          ISO / ESTANDAR IEEE
        </a>

        <a href="/reque.pdf" download className="btn dark">
          REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES
        </a>

        <a href="/sha256.pdf" download className="btn dark">
          CÓDIGO PYTHON ALGORITMO SHA-256
        </a>

        <button onClick={volver} className="btn dark">
          REGRESAR AL PROYECTO PRINCIPAL
        </button>
      </div>
    </div>
  );
}

export default Documentacion;