import React, { useContext } from "react";
import OrderDetailsStyles from "./OrderDetails.module.css";
import idImages from "../../images/graphics.svg";
import { OrderContext } from "../../services/OrderContext";

const OrderDetails = () => {
  const order = useContext(OrderContext);
  return (
    order && (
      <div className={OrderDetailsStyles.orderDetails}>
        <p className={`text text_type_digits-large ${OrderDetailsStyles.orderCount}`}>
          {order.order.number}
        </p>
        <p className={`text text_type_main-medium ${OrderDetailsStyles.orderId}`}>
          идентификатор заказа
        </p>
        <img src={idImages} alt="Кнопка статуса" className={OrderDetailsStyles.idImages} />
        <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
        <p className={`text text_type_main-default text_color_inactive ${OrderDetailsStyles.text}`}>
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    )
  );
};

export default OrderDetails;
