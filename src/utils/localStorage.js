export function getLocalStorage(key, initialValue) {
  // console.log("getLocalStorage");
  const storedValue = localStorage.getItem(key);
  if (!storedValue) {
    //if stored value is null
    return initialValue;
  }
  return JSON.parse(storedValue);
}

export function setLocalStorage(key, value) {
  // console.log("setLocalStorage");
  localStorage.setItem(key, JSON.stringify(value));
}
