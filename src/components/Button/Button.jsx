import PropTypes from "prop-types";

export function Button({ isDisable, handleClick, text, className }) {
  return (
    <button className={className} disabled={isDisable} onClick={handleClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  isDisable: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
