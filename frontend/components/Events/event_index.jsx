import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events
    };
  }

  componentDidMount() {
    this.props.fetchAllEvents();
  }

  render() {
    if (!this.state.events) {
      return null;
    }

    return (
      <ul className="event-index">
        {this.props.events.map( event => {
          return <EventIndexItem key={event.id} event={event} />;
        })}
      </ul>
    );
  }
}

export default EventIndex;