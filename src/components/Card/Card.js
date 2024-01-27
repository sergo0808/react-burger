import CardStyles from "./Card.module.css";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { PropTypes } from "prop-types";

const Card = ({ image, name, price, card, onSelectCard, onOpenDetails }) => {
  const handleClickCard = () => {
    onOpenDetails();
    onSelectCard(card);
  };

  return (
    <article className={CardStyles.card} onClick={handleClickCard}>
      <Counter count={1} size="default" />
      <img src={image} alt={name} />
      <div className={CardStyles.priceGroup}>
        <p className="text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </article>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  card: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    _id: PropTypes.string,
  }),
};

export default Card;
