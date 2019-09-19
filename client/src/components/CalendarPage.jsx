import React from 'react';

import Calendar from 'react_google_calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

const { YOUR_GOOGLE_API_KEY } = process.env

const CalendarConfig = {
  api_key: YOUR_GOOGLE_API_KEY,
  calendars: [
    {
      name: 'demo', // whatever you want to name it
      url: 'https://calendar.google.com/calendar/' // your calendar URL
    }
  ],
  dailyRecurrence: 700,
  weeklyRecurrence: 500,
  monthlyRecurrence: 20,
};

class CalendarPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }
  
  render() {
    return (
  <div>
      <Calendar
        events={this.state.events}
        config={CalendarConfig} />
    </div>
    )
  }
}

export default CalendarPage;


// import React from 'react';

// const CalendarPage = () => {
//   return (
//     <div>Coming Soon</div>
//   );
// }

// export default CalendarPage;
