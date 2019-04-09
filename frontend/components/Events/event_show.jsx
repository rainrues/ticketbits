import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../Footer/footer';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {event: this.props.event};
    this.formatDate = this.formatDate.bind(this);
    this.setMonth = this.setMonth.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  setMonth(field) {
    const months = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: 'Nov',
      12: 'Dec'
    };

    if (field === "startDate") {
      return months[this.props.event.start_date_object.month];
    } else {
      return months[this.props.event.end_date_object.month];
    }
  }

  setTime(field) {
    let hour = "";
    let min = "";
    let period = "";

    if (field === "startTime") {
      if (this.props.event.start_time_object.hour > 12) {
        hour = `${this.props.event.start_time_object.hour - 12}`;
        period = "PM";
      } else if (this.props.event.start_time_object.hour === 0) {
        hour = "12";
        period = "AM";
      } else {
        hour = `${this.props.event.start_time_object.hour}`;
        period = "AM";
      }
      if (this.props.event.start_time_object.minute < 10) {
        min = `0${this.props.event.start_time_object.minute}`;
      } else {
        min = `${this.props.event.start_time_object.minute}`;
      }
    } else {
      if (this.props.event.end_time_object.hour > 12) {
        hour = `${this.props.event.end_time_object.hour - 12}`;
        period = "PM";
      } else if (this.props.event.end_time_object.hour === 0) {
        hour = "12";
        period = "AM";
      } else {
        hour = `${this.props.event.end_time_object.hour}`;
        period = "AM";
      }
      if (this.props.event.end_time_object.minute < 10) {
        min = `0${this.props.event.end_time_object.minute}`;
      } else {
        min = `${this.props.event.end_time_object.minute}`;
      }
    }

    return `${hour}:${min} ${period}`;
  }

  formatDate(field) {
    if (field === "startDate") {
      return `${this.setMonth("startDate")} ${this.props.event.start_date_object.date}, ${this.setTime("startTime")}`;
    } else {
      return `${this.setMonth("endDate")} ${this.props.event.end_date_object.date}, ${this.setTime("endTime")}`;
    }
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId).then( response => this.setState({event: response}));
  }

  render() {
    if (!this.props.event) {
      return null;
    }

    if (this.props.event.price === 0) {
      this.props.event.price = "Free";
    }

    return (
      <div id="event-show">
        

        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default withRouter(EventShow);