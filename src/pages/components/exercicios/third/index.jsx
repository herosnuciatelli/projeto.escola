import { useEffect } from "react";

const TerceiroExercicio = (props) => {
    useEffect(() => {
      props.SetRightAnswer(2);
    }, [])
  return (
    <>
      <p>
        <span>
            3)Em um poliedro convexo, o número de arestas excede o<br /> número de vértices em 6 unidades:
        </span>
        <br />
        <br />
        Faces = ?
      </p>

      <div className="alternativas">
        <div className="alternativas-single">
            <button className="glow-on-hover">A) 6</button>
        </div>
        <div className="alternativas-single">
            <button className="glow-on-hover">B) 7  </button>
        </div>
        <div className="alternativas-single">
            <button className="glow-on-hover">C) 8</button>
        </div>
      </div>
    </>
  );
};

export default TerceiroExercicio;
