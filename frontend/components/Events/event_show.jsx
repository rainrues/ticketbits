import React from 'react';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.event;
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
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render() {
    if (!this.props.event) {
      return null;
    }

    if (this.props.event.price === 0) {
      this.props.event.price = "Free";
    }

    return (
      <div className="event-index-item">
        <div className="index-item-shaddow">
          <div className="index-item-click" onClick={this.handleClick}>
            <div className="index-item-event-image-container">
              <img className="index-item-event-image" src={this.props.event.image_url} alt="event image" />
            </div>
            <div>
              <button className="event-price">{this.props.event.price}</button>
            </div>
          </div>
          <div className="event-item-middle">
            <div className="event-middle-actions">
              <button className="event-middle-button"><i className="fas fa-arrow-up fa-lg"></i></button>
              <button className="event-middle-button"><i className="far fa-heart fa-lg"></i></button>
            </div>
          </div>
          <div className="index-item-bottom-section">
            <div className="bottom-section-left">
              <p className="bottom-section-left-month">{this.setMonth("startDate")}</p>
              <p className="bottom-section-left-day">{this.props.event.start_date_object.date}</p>
            </div>
            <div className="event-info">
              <h2 className="event-title">{this.props.event.title}</h2>
              <div className="bottom-section-small-text">
                <time className="event-time">{this.formatDate("startDate")}</time>
                <div className="event-location">
                  {this.props.event.venue_name}, {this.props.event.city}
                </div>
                <div>{this.props.event.price}</div>
              </div>
            </div>
          </div>
        </div>
        <p>{this.props.event.about}</p>
      </div>
    )
  }
}

export default withRouter(EventShow);