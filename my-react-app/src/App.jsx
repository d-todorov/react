import './App.scss'
import Card from './Card'
import Modal from './Modal'
import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trips, setTrips] = useState([]);
  const [openedTrip, setOpenedTrip] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTrips(data.trips);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load trips.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="root">
      <h1>Trips App</h1>
      <div className="grid">
        {trips.map((trip) => (
          <Card key={trip.id} trip={trip} onMoreInfo={() => setOpenedTrip(trip)}/>
        ))}
      </div>

    {openedTrip && (
        <Modal trip={openedTrip} onClose={() => setOpenedTrip(null)} />
    )}
    </div>
  );
}

export default App
