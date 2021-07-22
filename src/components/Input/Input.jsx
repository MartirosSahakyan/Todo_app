import PropTypes from "prop-types";

export function Input({ onChange, value, placeholder }) {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
