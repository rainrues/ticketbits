import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events
      // filteredEvents:
      // location:
      // type:
      // date:
    };
  }

  componentDidMount() {
    this.props.fetchAllEvents();
  }

  //componentDidUpdate
  //filteredEvents prop that gets updated
  // if (this.state.location) {
      // iterate through all events
  //   if (this.state.events.location === this.state.location)
  //     newEvents << 
  //   }
  // }

  render() {
    if (!this.state.events) {
      return null;
    }

    return (
      <ul className="event-index">
        //this.props.filteredEvents.map
        {this.props.events.map( event => {
          return <EventIndexItem key={event.id} event={event} />;
        })}
      </ul>
    );
  }
}

export default EventIndex;