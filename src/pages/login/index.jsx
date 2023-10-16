import Foguete from "../assets/foguete.png";
import Conchete from "../assets/conchete.png";
import Warnings from "../components/warnings/index";
import "./index.css";
import { useState, useEffect } from "react";

function Login(props) {
  // props.onLoginSuccess("Login_Forçado")

  const [warningText, setWarningText] = useState();
  const [warningType, setWarningType] = useState();

  const fazerLogin = () => {
    const Email = document.getElementById("email").value;
    const Senha = document.getElementById("senha").value;

    const EmailCadastrado = "washingtona@cruzeirodosul.com.br";
    const SenhaCadastrada = "123456";

    if (Email == EmailCadastrado && Senha == SenhaCadastrada) {
      setWarningType("200ok");
      setWarningText("Login feito com Sucesso!");

      setTimeout(() => {
        return props.onLoginSuccess("Washington");
      }, 1500);
    } else {
      setWarningType("404error");
      return setWarningText("Login Negado!");
    }
  };

  const inputAtivado = (input) => {
    const Email = document.getElementById("email");
    const Senha = document.getElementById("senha");

    const propriedadeBorda = "border: 1px solid var(--azul-login);";

    if (input == "email") {
      return (Email.style.cssText = propriedadeBorda);
    }
    return (Senha.style.cssText = propriedadeBorda);
  };

  const labelOn = `top: -9px;font-size: 12px;background-color: white;padding: 0 5px;color: var(--azul-login);`;

  const verificarInput = () => {
    const InputLabel = document.querySelectorAll(".input-label");
    const Email = document.getElementById("email");
    const Senha = document.getElementById("senha");
    const inputLabelEmail = InputLabel[0];
    const inputLabelSenha = InputLabel[1];

    if (Email.value.trim() != "") {
      inputLabelEmail.style.cssText = labelOn;
    }

    if (Senha.value.trim() != "") {
      inputLabelSenha.style.cssText = labelOn;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(verificarInput, 10);

    return () => {
      clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado.
    };
  }, []);

  const eyeFunctions = () => {
    const input = document.getElementById("senha");
    const eye = document.querySelector(".eye-label");
    const inputType = input.type;

    if (inputType == "text") {
      eye.innerHTML = '<i class="ri-eye-off-line"></i>';
      return (input.type = "password");
    }

    eye.innerHTML = '<i class="ri-eye-line"></i>';
    return (input.type = "text");
  };

  return (
    <div className="container" style={{ background: "#fff", color: "#000" }}>
      <Warnings
        setWarningText={setWarningText}
        warningText={warningText}
        warningType={warningType}
      />
      <div className="rocket">
        <img className="rocket__img" src={Foguete} />
        <span className="rocket__letters no-select">1ºJ</span>
        <span className="rocket__letters no-select">1ºJ</span>
        <span className="rocket__letters no-select">1ºJ</span>
        <span className="rocket__letters no-select">1ºJ</span>
      </div>

      <div className="conchete">
        <img className="conchete__img" src={Conchete} />
      </div>
      <div className="mobile-divisor"></div>

      <div className="login">
        <div className="content">
          <h2>Login</h2>
          <div className="input-container">
            <input
              type="email"
              id="email"
              className="input-field"
              onClick={() => inputAtivado("email")}
            />
            <label htmlFor="email" className="input-label">
              Email
            </label>
          </div>
          <div className="input-container">
            <input
              type="password"
              id="senha"
              className="input-field"
              onClick={() => inputAtivado("senha")}
            />
            <label htmlFor="senha" className="input-label">
              Senha
            </label>
            <label htmlFor="senha" className="eye-label" onClick={eyeFunctions}>
              <i className="ri-eye-off-line"></i>
            </label>
          </div>

          <button onClick={fazerLogin}>Entrar</button>
        </div>
        <span className="creditos" style={{ opacity: 0.8 }}>
          Desenvolvido por{" "}
          <a href="https://www.instagram.com/hnuciatelli_/" target="_blank">
            @hnuciatelli_
          </a>
        </span>
      </div>
    </div>
  );
}

export default Login;
