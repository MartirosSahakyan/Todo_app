export function Button({ isDisable, handleClick, text }) {
  return (
    <button
      disabled={isDisable}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
