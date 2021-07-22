import PropTypes from "prop-types";
import "./Input.css";
import cn from "classnames";
import { inputTypes } from "../../helpers/constants";
export function Input({ onChange, value, placeholder, name }) {
  return (
    <input
      className={cn(
        { mainInput: name === inputTypes.mainInput },
        { todoListInput: name === inputTypes.todoInput }
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
