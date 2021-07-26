export function setLocalStorage(state) {
  localStorage.setItem("_state", JSON.stringify(state));
}
export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("_state"));
}

const createNewId = () => {
  return Date.now();
};

export { createNewId };
