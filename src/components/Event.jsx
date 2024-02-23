import { useCallback, useState } from "react";
import { NavLink,Link,useParams  } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

function Event(props) {
  const [event, setEvent] = useState(props.event);
  const { id } = useParams();


  const src = event.nbTickets === 0 ? " images/sold_out.png" : `images/${event.img}`;
  const msg = event.like ? "Dislike" : "Like";
  console.log(event)
  console.log(event.id)
  const handleLike = useCallback(() => {
    setEvent({ ...event, like: !event.like });
  }, [event.like]);

  return (
    <Card>
      <Card.Img variant="top" src={src} height={250} />
      <Card.Body>
        <Card.Title>

        <Link to={`/events/${event.id}`}>name : {event.name}</Link>

        </Card.Title>
        <Card.Text>
          Price : {event.price}
        </Card.Text>
        <Card.Text>
          Number of tickets : {event.nbTickets}
        </Card.Text>
        <Card.Text>
          Number of participants : {event.nbParticipants}
        </Card.Text>
        <Button variant="primary" onClick={handleLike}>{msg}</Button>
        <Link to={`/events/${event.id}`}>Event Details</Link>



      </Card.Body>
    </Card>
  );
}

export default Event;