import React from 'react';

import Calendar from 'react_google_calendar'

const CalendarPage = {
  api_key: YOUR_GOOGLE_API_KEY,
  calendars: [
    {
      name: 'demo', // whatever you want to name it
      url: 'exampleURL@group.calendar.google.com' // your calendar URL
    }
  ],
  dailyRecurrence: 700,
  weeklyRecurrence: 500,
  monthlyRecurrence: 20
}

export default class MyApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }
  
  render() {
  <div>
      <Calendar
        events={this.state.events}
        config={calendar_configuration} />
    </div>
  }
}

export default CalendarPage;
