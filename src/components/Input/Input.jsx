import PropTypes from "prop-types";
import styles from './Input.module.css'

export function Input({ onChange, value, placeholder }) {
  
  return (
    <input
      className={styles.mainInput}
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
