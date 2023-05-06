import React, { useEffect, useState } from "react";
import AppStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import AppMain from "../AppMain/AppMain";
import { getProductData } from "../../utils/BurgerApi";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductData().then((data) => setData(data.data));
  }, []);

  return (
    <div className={AppStyles.app} id="app">
      <AppHeader />
      <AppMain data={data} />
    </div>
  );
}

export default App;
