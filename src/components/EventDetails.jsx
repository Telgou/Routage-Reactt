import { useParams } from "react-router-dom";
import events from "../events.json"
import { useState, useEffect } from "react";

function EventDetails() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const event = events.filter((e) => e.id == id)[0];

  console.log(event)


  return (
    <div>
      {<img src={`../images/${event.img}`} alt="Event" style={{ width: '50%', float: 'left', padding: '2%' }} />} {/* Conditional rendering */}
      <div style={{}}>
        <h1> {event.name}</h1>
        <h3>Description</h3>
        <p>{event.description}</p>
        <h3>Price</h3>
        <p>{event.price}</p>

      </div>

    </div>

  );
}

export default EventDetails;
