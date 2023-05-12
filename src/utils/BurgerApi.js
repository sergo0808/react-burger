const BASE_URL = "https://norma.nomoreparties.space/api";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getProductData = () => {
  return fetch(`${BASE_URL}/ingredients`).then((res) => handleResponse(res));
};

export const makeAnOrder = (input) => {
  return fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: ["643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa093d"] }),
  }).then((res) => handleResponse(res));
};
