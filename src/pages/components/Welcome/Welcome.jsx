import { useEffect } from "react";
import "./index.css";
import baffle from "baffle";

function Welcome() {
  useEffect(() => {
    const target = baffle(".title__welcome");
    target.set({
      characters: "░P░O░L░I░E░D░R░O░S░",
      speed: 100,
    });
    target.start();
    target.reveal(1000, 1000);
  });

  return (
    <div className="container__welcome">
      <h2 className="title__welcome">POLIEDROS</h2>
    </div>
  );
}

export default Welcome;
