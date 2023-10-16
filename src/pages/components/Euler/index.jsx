import "./index.css";

const Euler = ({ HandleViewer }) => {
  return (
    <div className="container__euler">
      <div
        className="title"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <h2>Relação de Euler</h2>
      </div>
      <div className="content">
        <div className="button">
          <button id="viewer" onClick={HandleViewer}>
            Ver Modelo
          </button>
          <button className="handle__ex">Exercícios</button>
        </div>
      </div>
    </div>
  );
};

export default Euler;
