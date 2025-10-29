import "./Card.scss";

const Card = ({ trip, onMoreInfo }) => {
  return (
    <div className="card">
      <img src={trip.image} alt={trip.name} />
      <div className="card-content">
        <h2>{trip.name}</h2>
        <p className="rating">
            {Array(trip.rating)
            .fill(0)
            .map((_, i) => (
            <span key={i}>⭐</span>
            ))}
        </p>
        <p>{trip.description}</p>
      </div>
      <button onClick={onMoreInfo}>More info</button>
    </div>
  );
};

export default Card;