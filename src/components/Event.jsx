import { Link } from "react-router-dom";

function Event({ name, description, volunteers, image }) {
  // the cleanup cards to be displayed on the landing page
  return (
    <div className="event-holder">
      <div className="text-container">
        <img src={image} alt="spotted garbage"></img>
        <h3>{name}</h3>
        <p style={{ fontWeight: 600, color: "#ABFAA3" }}>{volunteers} Volunteer Spots</p>
        <p>{description}</p>
      </div>
      <Link to="/dashboard">Attend</Link>
    </div>
  );
}

export default Event;
