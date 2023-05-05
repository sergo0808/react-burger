import React from "react";
import IngredientDetailsStyles from "./IngredientDetails.module.css";
import PropTypes from "prop-types";

const IngredientDetails = ({ title, card }) => {
  console.log(card);
  if (!card) {
    return null;
  }

  return (
    <>
      <h3 className="text text_type_main-large mt-4">{title}</h3>
      <article className={IngredientDetailsStyles.info}>
        <img src={card.image_large} className="mb-5" />
        <p className="text text_type_main-medium mb-8">{card.name}</p>
        <ul className={IngredientDetailsStyles.lists}>
          <li className={IngredientDetailsStyles.list}>
            <h3 className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</h3>
            <p className="text text_type_main-default text_color_inactive text_type_digits-default">
              {card.calories}
            </p>
          </li>
          <li className={IngredientDetailsStyles.list}>
            <h3 className="text text_type_main-default text_color_inactive mb-2">Белки, г</h3>
            <p className="text text_type_main-default text_color_inactive text_type_digits-default">
              {card.proteins}
            </p>
          </li>
          <li className={IngredientDetailsStyles.list}>
            <h3 className="text text_type_main-default text_color_inactive mb-2">Жиры, г</h3>
            <p className="text text_type_main-default text_color_inactive text_type_digits-default">
              {card.fat}
            </p>
          </li>
          <li className={IngredientDetailsStyles.list}>
            <h3 className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</h3>
            <p className="text text_type_main-default text_color_inactive text_type_digits-default">
              {card.carbohydrates}
            </p>
          </li>
        </ul>
      </article>
    </>
  );
};

IngredientDetails.propTypes = {
  calories: PropTypes.string,
  proteins: PropTypes.string,
  fat: PropTypes.string,
  carbohydrates: PropTypes.string,
};

export default IngredientDetails;
