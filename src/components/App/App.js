import React, { useEffect, useState } from "react";
import AppStyles from "./App.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { BASE_URL } from "../../utils/data";
import { OrderContext } from "../../services/OrderContext";

const App = () => {
  const [data, setData] = useState();
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [selectCard, setSelectCard] = useState();
  const [orderData, setOrderData] = useState();

  const handleOpenDetails = () => {
    setIsOpenDetails(true);
  };

  const handleOpenOrder = () => {
    setIsOpenOrder(true);
  };

  const handleCloseModals = () => {
    setIsOpenOrder(false);
    setIsOpenDetails(false);
  };

  const createOrders = async (ingredients) => {
    try {
      const res = await fetch(`${BASE_URL}orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients }),
      });
      if (!res.ok) {
        throw new Error("Bad response");
      }
      const data = await res.json();
      setOrderData(data);
    } catch (err) {
      console.warn(err);
    }
  };

  const getIngredients = async () => {
    try {
      const res = await fetch(`${BASE_URL}ingredients`);
      if (!res.ok) {
        throw new Error("Bad response");
      }
      const data = await res.json();
      setData(data.data);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div className={AppStyles.app}>
      {data && (
        <>
          <Header />
          <OrderContext.Provider value={orderData}>
            <Main
              onCreateOrders={createOrders}
              ingredients={data}
              onOpenDetails={handleOpenDetails}
              onOpenOrder={handleOpenOrder}
              onClose={handleCloseModals}
              onSelectCard={setSelectCard}
              isOpenOrder={isOpenOrder}
              isOpenDetails={isOpenDetails}
              selectCard={selectCard}
            />
          </OrderContext.Provider>
        </>
      )}
    </div>
  );
};

export default App;
