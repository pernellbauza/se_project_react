import "./ItemCard.css";
const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div>
        <img
          src={item.link}
          alt={item.name}
          className="card_image"
          onClick={() => onSelectCard(item)}
        />
      </div>
      <h3 className="card_name">{item.name}</h3>
    </div>
  );
};

export default ItemCard;
