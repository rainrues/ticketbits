import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
    this.formatDate = this.formatDate.bind(this);
    this.setMonth = this.setMonth.bind(this);
    this.setTime = this.setTime.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.history.push(`/events/${this.state.id}`);
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

  render() {
    if (this.state.price === 0 ) {
      this.setState({price: "Free"});
    }

    return (
      <div className="event-index-item">
        <div className="index-item-shaddow">
          <div className="index-item-click" onClick={this.handleClick}>
            <div className="index-item-event-image-container">
              <img className="index-item-event-image" src={this.state.image_url} alt="event image"/>
            </div>
            <div>
              <button className="event-price">{this.state.price}</button>
            </div>
          </div>
          <div className="index-item-bottom-section">
            <div className="event-info">
              <time className="event-time">{this.formatDate("startDate")}</time>
              <h2 className="event-title">{this.state.title}</h2>
              <div className="event-location">
                {this.state.venue_name}, {this.state.city}
              </div>
            </div>
          </div>
          <div className="event-item-middle">
            <div className="event-middle-actions">
              <button className="event-middle-button"><i className="fas fa-arrow-up fa-lg"></i></button>
              <button className="event-middle-button"><i className="far fa-heart fa-lg"></i></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(EventIndexItem);