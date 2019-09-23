import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import axios from "axios";
const { GOOGLE_API_KEY } = process.env;

class DBCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  componentDidMount(){
    axios.get(`https://content.googleapis.com/calendar/v3/calendars/79ptp90b8asivdmhlp4ifl0fas@group.calendar.google.com/events?key=AIzaSyCc7TZ8lRqSWM6FA7xxCtlOV4gyGzhYASM`)
    .then((res) => {
      const events = res.data.items;
      console.log(res.data.items[0].htmlLink);
      this.setState({
        events
      })
    })
    .catch((err) => console.error(err));

  }

  render() {
    const { events } = this.state;
    return (
      <div className="dashboard-card p-4">
        <h5>Upcoming Events</h5>
        <Col>
          {events.map(event => {
            let htmlLink = event.h
            return (
            <Row>
              <div><h6>{event.summary}</h6></div>
              <div><h6> {event.start.dateTime.slice(5, 10)}</h6></div>
              <Button outline color="info" onClick={() => window.location.href = event.htmlLink}>See more details!</Button> 
            </Row>
            )
          })}
        </Col>
      </div>
    );
  }
}

export default DBCalendar;
