import "./index.css";

function Warnings(props) {
  const warningText = props.warningText;
  const warningType = props.warningType;
  const warningField = document.querySelector(".warning-field");

  const checkWarningType = (warning) => {
    if (warning == "200ok") {
      return (warningField.style.cssText =
        "background-color: var(--verde-alerta);border-left: 6px solid var(--verde-alerta-2);");
    }
  };
  checkWarningType(warningType);

  if (warningText) {
    warningField.style.display = "initial";
    warningField.style.animation = "alertMotion 3s";
    setTimeout(() => {
      warningField.style.display = "none";
      props.setWarningText("");
    }, 2900);
  }

  return (
    <div className="warning-field">
      <span>{warningText}</span>
    </div>
  );
}

export default Warnings;
