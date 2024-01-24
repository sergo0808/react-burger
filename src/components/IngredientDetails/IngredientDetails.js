import IngredientDetailsStyles from "./IngredientDetails.module.css";
import PropTypes from "prop-types";

const IngredientDetails = ({ selectCard }) => {
  return (
    <div className={IngredientDetailsStyles.IngredientDetails}>
      <img
        src={selectCard.image_large}
        className={IngredientDetailsStyles.image}
        alt={selectCard.name}
      />
      <h3 className="text text_type_main-medium">{selectCard.name}</h3>
      <ul className={IngredientDetailsStyles.info}>
        <li className={IngredientDetailsStyles.info__column}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{selectCard.calories}</p>
        </li>
        <li className={IngredientDetailsStyles.info__column}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{selectCard.proteins}</p>
        </li>
        <li className={IngredientDetailsStyles.info__column}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{selectCard.fat}</p>
        </li>
        <li className={IngredientDetailsStyles.info__column}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">
            {selectCard.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

IngredientDetailsStyles.propTypes = {
  selectCard: PropTypes.shape({
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
  }),
};

export default IngredientDetails;
