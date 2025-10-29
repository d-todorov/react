import "./Card.scss";

const Card = ({ trip }) => {
  return (
    <div className="card">
      <img src={trip.image} alt={trip.name} />
      <div className="card-content">
        <h2>{trip.name}</h2>
        <p className="rating">⭐ {trip.rating}</p>
        <p>{trip.description}</p>
      </div>
      <button>More info</button>
    </div>
  );
};

export default Card;