import { useEffect } from "react";

const SegundoExercicio = (props) => {
    useEffect(() => {
      props.SetRightAnswer(1);
    }, [])
  return (
    <>
      <p>
        <span>
          2) Um poliedro convexo possui: <br />
          6 faces quadrangulares e 2 hexagonais.<br />
        </span>
        <br />
        <br />
        Qual o números de vértices desse poliedro?
      </p>

      <div className="alternativas">
        <div className="alternativas-single">
            <button className="glow-on-hover">A) 13</button>
        </div>
        <div className="alternativas-single">
            <button className="glow-on-hover">B) 12</button>
        </div>
        <div className="alternativas-single">
            <button className="glow-on-hover">C) 18</button>
        </div>
      </div>
    </>
  );
};

export default SegundoExercicio;
