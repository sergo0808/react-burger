import React, { useEffect, useState } from "react";
import AppStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import AppMain from "../AppMain/AppMain";
import Modal from "../Modal/Modal";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

function App() {
  const BASE_URL = "https://norma.nomoreparties.space/api/ingredients";
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        setData(data.data);
      } catch (err) {
        alert(err);
      }
    };
    getProductData();
  }, []);

  return (
    <div className={AppStyles.app} id="app">
      <AppHeader />
      <AppMain data={data} />
    </div>
  );
}

export default App;
