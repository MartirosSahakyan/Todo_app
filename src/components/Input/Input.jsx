import PropTypes from "prop-types";
import "./Input.css";
import cn from "classnames";
import { INPUT_TYPES } from "../../helpers/constants";
export function Input({ onChange, value, placeholder, name }) {
  return (
    <input
      className={cn(
        { mainInput: name === INPUT_TYPES.mainInput },
        { todoListInput: name === INPUT_TYPES.todoInput }
      )}
      type="text"
      name={name}
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
  name: PropTypes.string.isRequired,
};
