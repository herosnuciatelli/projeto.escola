import { useCallback, useEffect, useState } from "react";
import PrimeiroExercicio from "./first";
import "./index.css";
import SegundoExercicio from "./second";
import TerceiroExercicio from "./third";

const ExerciciosPoliedros = (props) => {
  const [RightAnswer, SetRightAnswer] = useState();
  const [ExercicioSelecionado, SetExercicioSelecionado] = useState(1);

  const HandleResult = useEffect(() => {
    const alternativas = document.querySelectorAll(".alternativas-single");

    alternativas.forEach((alternativa, index) => {
      alternativa.addEventListener("click", () => {
        if (index === RightAnswer) {
          return HandleRightCongrats();
        }
        return HandleWrongCongrats();
      });
    });

    const HandleRightCongrats = () => {
      props.SetShowCongrats(200);
    };

    const HandleWrongCongrats = () => {
      props.SetShowCongrats(500);
    };
  });

  const HandleQuestion = () => {
    if (ExercicioSelecionado === 1) {
      return <PrimeiroExercicio SetRightAnswer={SetRightAnswer} />;
    }
    if (ExercicioSelecionado === 2) {
      return <SegundoExercicio SetRightAnswer={SetRightAnswer} />;
    }
    return <TerceiroExercicio SetRightAnswer={SetRightAnswer} />;
  };

  const HandleNextExercise = useCallback(() => {
    const NextExercise = ExercicioSelecionado + 1;

    SetExercicioSelecionado(NextExercise);
    props.SetShowCongrats(404);
  });

  const HandleEnd = () => {
    props.SetFinalScreen(true);
    props.SetExercise(false);
    props.SetShowCongrats(404);
  };

  const HandleGoBack = useCallback(() => {
    props.SetShowCongrats(404);
  });
  return (
    <div className="container__exercise">
      {props.ShowCongrats === 404 && (
        <div className="question">
          <HandleQuestion />
        </div>
      )}

      {props.ShowCongrats === 200 && (
        <div className="right">
          <h2 className="title__congrats">PARABÉNS</h2>
          {ExercicioSelecionado != 3 && (
            <button
              className="glow-on-hover"
              style={{ margin: "0 auto" }}
              onClick={HandleNextExercise}
            >
              Ir para o Próximo <i className="ri-arrow-right-double-fill"></i>
            </button>
          )}
          {ExercicioSelecionado === 3 && (
            <button
              className="glow-on-hover"
              style={{ margin: "0 auto" }}
              onClick={HandleEnd}
            >
              Ir para a Finalização{" "}
              <i className="ri-arrow-right-double-fill"></i>
            </button>
          )}
        </div>
      )}

      {props.ShowCongrats === 500 && (
        <div className="wrong">
          <h2 className="title__congrats">ERROU!!!</h2>

          <button
            className="glow-on-hover"
            style={{ margin: "0 auto" }}
            onClick={HandleGoBack}
          >
            Voltar para a Questão <i className="ri-arrow-left-double-fill"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ExerciciosPoliedros;
