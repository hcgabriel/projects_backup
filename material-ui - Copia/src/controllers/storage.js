export const save = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj));
}

export const getData = (key) => {
  return JSON.parse(localStorage.getItem(key));
}