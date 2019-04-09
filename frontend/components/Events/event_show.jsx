import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../Footer/footer';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
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
      return months[this.state.start_date_object.month];
    } else {
      return months[this.state.end_date_object.month];
    }
  }

  setTime(field) {
    let hour = "";
    let min = "";
    let period = "";

    if (field === "startTime") {
      if (this.state.start_time_object.hour > 12) {
        hour = `${this.state.start_time_object.hour - 12}`;
        period = "PM";
      } else if (this.state.start_time_object.hour === 0) {
        hour = "12";
        period = "AM";
      } else {
        hour = `${this.state.start_time_object.hour}`;
        period = "AM";
      }
      if (this.state.start_time_object.minute < 10) {
        min = `0${this.state.start_time_object.minute}`;
      } else {
        min = `${this.state.start_time_object.minute}`;
      }
    } else {
      if (this.state.end_time_object.hour > 12) {
        hour = `${this.state.end_time_object.hour - 12}`;
        period = "PM";
      } else if (this.state.end_time_object.hour === 0) {
        hour = "12";
        period = "AM";
      } else {
        hour = `${this.state.end_time_object.hour}`;
        period = "AM";
      }
      if (this.state.end_time_object.minute < 10) {
        min = `0${this.state.end_time_object.minute}`;
      } else {
        min = `${this.state.end_time_object.minute}`;
      }
    }

    return `${hour}:${min} ${period}`;
  }

  formatDate(field) {
    if (field === "startDate") {
      return `${this.setMonth("startDate")} ${this.state.start_date_object.date}, ${this.setTime("startTime")}`;
    } else {
      return `${this.setMonth("endDate")} ${this.state.end_date_object.date}, ${this.setTime("endTime")}`;
    }
  }

  componentDidMount() {
    if (!this.state) {
      this.props.fetchEvent(this.props.match.params.eventId).then( event => this.setState({event: event.event}));
    }
  }

  render() {
    if (!this.state) {
      return null;
    }
    debugger;
    if (this.state.price === 0) {
      this.setState(this.props.event.price = "Free");
    }

    return (
      <div id="event-show">
        <div>{this.state.event.title}</div>

        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default withRouter(EventShow);