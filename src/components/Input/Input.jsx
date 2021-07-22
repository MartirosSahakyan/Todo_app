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
