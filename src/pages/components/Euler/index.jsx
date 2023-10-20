import "./index.css";

const Euler = ( props ) => {

  const handleExercise = () => {
    props.SetExercise(true)
  };

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
          <button id="viewer" onClick={props.HandleViewer}>
            Ver Modelo
          </button>
          <button className="handle__ex" onClick={handleExercise}>Exercícios</button>
        </div>
      </div>
    </div>
  );
};

export default Euler;
