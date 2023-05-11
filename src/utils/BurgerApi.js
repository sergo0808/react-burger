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
