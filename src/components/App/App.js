import React, { useEffect, useState } from "react";
import AppStyles from "./App.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { BASE_URL } from "../../utils/data";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const App = () => {
  const [data, setData] = useState();
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const [isOpenDetails, setIsOpenDetails] = useState(false);

  const [selectCard, setSelectCard] = useState();

  const handleisOpenDetails = () => {
    setIsOpenDetails(true);
  };

  const handleisOpenOrder = () => {
    setIsOpenOrder(true);
  };

  const handleCloseModals = () => {
    setIsOpenOrder(false);
    setIsOpenDetails(false);
  };

  const getIngridients = async () => {
    try {
      const res = await fetch(BASE_URL);
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
    getIngridients();
  }, []);

  return (
    <div className={AppStyles.app}>
      {data && (
        <>
          <Header />
          <Main
            ingridients={data}
            onOpenDetails={handleisOpenDetails}
            onOpenOrder={handleisOpenOrder}
            onClose={handleCloseModals}
            onSelectCard={setSelectCard}
          />

          {isOpenOrder && (
            <Modal onClose={handleCloseModals}>
              <OrderDetails />
            </Modal>
          )}
          {isOpenDetails && (
            <Modal title="Детали ингредиента" onClose={handleCloseModals}>
              <IngredientDetails selectCard={selectCard} />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default App;
