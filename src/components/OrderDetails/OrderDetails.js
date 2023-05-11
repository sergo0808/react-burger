import OrderDetailsStyles from "./OrderDetails.module.css";
import statusButton from "../../images/done.png";
import { useContext } from "react";
import { orderContext } from "../context/orderContext";

const OrderDetails = () => {
  const order = useContext(orderContext);
  return (
    <div>
      <h3 className="text text_type_digits-large mt-20 ml-25 ">{order.number}</h3>
      <p className="text text_type_main-medium mt-8 mb-15 " style={{ textAlign: "center" }}>
        идентификатор заказа
      </p>

      <img src={statusButton} className={OrderDetailsStyles.image} alt="кнопка статус" />

      <p className="text text_type_main-default mb-3" style={{ textAlign: "center" }}>
        Ваш заказ начали готовить
      </p>
      <p
        className={` ${OrderDetailsStyles.message} text text_type_main-default text_color_inactive`}
        style={{ textAlign: "center" }}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
