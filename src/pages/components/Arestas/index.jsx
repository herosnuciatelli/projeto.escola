import "./index.css";

function Arestas({ HandleViewer }) {
  return (
    <div className="container__diagonais">
      <div className="text">
        <h2>Nº de arestas</h2>
        <p>
          Para calcular o número de arestas em um poliedro, use a fórmula:{" "}
          <br /> <br />
          Número de Arestas = (3F3 + 4F4 + 5F5 + ...) / 2 <br /> <br />
          Onde F3, F4, F5, etc., representam o número de faces com 3, 4, 5
          lados, e assim por diante. Esta fórmula leva em consideração o número
          de faces de diferentes tipos no poliedro para calcular as arestas.
        </p>
        <button id="viewer" onClick={HandleViewer} style={{ marginTop: "5%" }}>
          Ver Modelo
        </button>
      </div>
    </div>
  );
}

export default Arestas;
