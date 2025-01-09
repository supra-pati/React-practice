import "./Button.css";

const Button = ({ childern, onClickHandler, disabled = false }) => {
  return (
    <>
      <button onClick={onClickHandler} disabled={disabled} className="buttons">
        {childern}
      </button>
    </>
  );
};
export default Button;
