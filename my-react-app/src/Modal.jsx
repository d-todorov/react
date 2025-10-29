import "./Modal.scss";

const Modal = ({ trip, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <button onClick={onClose}>✖</button>
        <img src={trip.image} alt={trip.name} />
        <h2>{trip.name}</h2>
        <p className="rating">
            {Array(trip.rating)
            .fill(0)
            .map((_, i) => (
            <span key={i}>⭐</span>
            ))}
        </p>
        <p>{trip.long_description}</p>
      </div>
    </div>
  );
};

export default Modal;
