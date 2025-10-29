import './App.scss'
import Card from './Card'
import Modal from './Modal'
import { useEffect, useState } from "react";

/**
 * App
 * 
 * Main app component
 */
function App() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trips, setTrips] = useState([]);
  const [openedTrip, setOpenedTrip] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [sortByRating, setSortByRating] = useState(false);

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

  const filteredTrips = trips
    .filter(trip =>
      trip.name.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) =>
      sortByRating ? b.rating - a.rating : 0
    );

  return (
    <div className="root">
      <h1>Trips App</h1>
        <div className="controls">
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <button onClick={() => setSortByRating(!sortByRating)}>
            {sortByRating ? "Unsort" : "Sort by Rating"}
          </button>
        </div>
      <div className="grid">
        {filteredTrips.length > 0 ? (
          filteredTrips.map((trip) => (
            <Card key={trip.id} trip={trip} onMoreInfo={() => setOpenedTrip(trip)} />
          ))
        ) : (
          <p>No trips found.</p>
        )}
      </div>

    {openedTrip && (
        <Modal trip={openedTrip} onClose={() => setOpenedTrip(null)} />
    )}
    </div>
  );
}

export default App
