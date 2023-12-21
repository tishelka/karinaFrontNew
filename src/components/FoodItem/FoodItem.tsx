import "./FoodItem.scss";

type FoodItemProps = {
  title: string;
  foodImg: string;
  calories: number;
  onEatClick: () => void;
};

export const FoodItem = ({
  title,
  foodImg,
  calories,
  onEatClick,
}: FoodItemProps) => {
  return (
    <div className="foodWrapper">
      <img className="foodImg" src={foodImg} />
      <h3>{title}</h3>
      <p>Пищевая ценность: {calories}кКал</p>
      <button className="foodButton" onClick={onEatClick}>
        Съел(а)
      </button>
    </div>
  );
};
