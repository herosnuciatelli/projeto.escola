import { useEffect } from "react";

const PrimeiroExercicio = (props) => {
  useEffect(() => {
    props.SetRightAnswer(0)
  }, [])

  return (
    <>
      <p>
        <span>
          1) Um poliedro convexo possui: <br />
          2 faces triângulares e 5 faces quadrangulares. <br />
        </span>
        <br />
        <br />
        A) O número de arestas: <br />
        B) O número de vértices: <br />
      </p>

      <div className="alternativas">
        <div className="alternativas-single">
            <button className="glow-on-hover">A) 13; B) 8</button>
        </div>
        <div className="alternativas-single">
            <button className="glow-on-hover">A) 17; B) 10</button>
        </div>
        <div className="alternativas-single">
            <button className="glow-on-hover">A) 9; B) 5</button>
        </div>
      </div>
    </>
  );
};

export default PrimeiroExercicio;
