function SomaAngulosInternos({ HandleViewer }) {
  return (
    <div className="container__somaAngulosInternos">
      <div className="title">
        <h2>Soma dos Ângulos internos das faces</h2>
      </div>
      <div className="content">
        <div className="button">
          <button
            id="viewer"
            onClick={HandleViewer}
            style={{ marginTop: "5%" }}
          >
            Ver Modelo
          </button>
        </div>
      </div>
    </div>
  );
}

export default SomaAngulosInternos;
