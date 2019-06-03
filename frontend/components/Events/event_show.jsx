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
      return months[this.state.event.start_date_object.month];
    } else {
      return months[this.state.event.end_date_object.month];
    }
  }

  setTime(field) {
    let hour = "";
    let min = "";
    let period = "";
    if (field === "startTime") {
      if (this.state.event.start_time_object.hour > 12) {
        hour = `${this.state.event.start_time_object.hour - 12}`;
        period = "PM";
      } else if (this.state.event.start_time_object.hour === 0) {
        hour = "12";
        period = "AM";
      } else {
        hour = `${this.state.event.start_time_object.hour}`;
        period = "AM";
      }
      if (this.state.event.start_time_object.minute < 10) {
        min = `0${this.state.event.start_time_object.minute}`;
      } else {
        min = `${this.state.event.start_time_object.minute}`;
      }
    } else {
      if (this.state.event.end_time_object.hour > 12) {
        hour = `${this.state.event.end_time_object.hour - 12}`;
        period = "PM";
      } else if (this.state.event.end_time_object.hour === 0) {
        hour = "12";
        period = "AM";
      } else {
        hour = `${this.state.event.end_time_object.hour}`;
        period = "AM";
      }
      if (this.state.event.end_time_object.minute < 10) {
        min = `0${this.state.event.end_time_object.minute}`;
      } else {
        min = `${this.state.event.end_time_object.minute}`;
      }
    }

    return `${hour}:${min} ${period}`;
  }

  formatDate(field) {
    if (field === "startDate") {
      return `${this.setMonth("startDate")} ${this.state.event.start_date_object.date}, ${this.state.event.start_date_object.year}`;
    } else {
      return `${this.setMonth("endDate")} ${this.state.event.end_date_object.date}, ${this.state.event.end_date_object.year}`;
    }
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId).then( event => this.setState({event: event.event}));
    
    scrollTo(0, 0);
  }

  render() {
    if (!this.state.event) {
      return null;
    }
  
  // THIS NEEDS TO BE CHANGED NOT GOOD PRACTICE TO CHANGE PROPS (CHANGE ELSEWHERE TOO)
    return (
      <div id="event-show">
        <div id="event-show-background-image-container">
          <img id="event-show-background-image" src={this.state.event.image_url} alt="event image" />
        </div>

        <main id="event-show-main-body">
          <section id="event-show-main-body-top">
            <div id="event-show-top-image-container">
              <img id="event-show-top-image" src={this.state.event.image_url} alt="event image" />
            </div>
            <div id="event-show-main-body-top-right">
              <div id="event-show-main-body-top-right-top">
                <div id="event-show-top-date">
                  <p id="event-show-top-month">{this.setMonth("startDate")}</p>  
                  <p id="event-show-top-day">{this.state.event.start_date_object.date}</p>
                </div>
                <div id="event-show-top-classification">
                  <p id="event-show-top-title">{this.state.event.title}</p>
                  <p id="event-show-top-producer">by {this.state.event.first_name} {this.state.event.last_name}</p>
                </div>
              </div>
              <div>
                <p id="event-show-top-price">{(this.state.event.price) ? "$" : ""}{this.state.event.price || "Free"}</p>
              </div>
            </div>
          </section>

          <section id="event-show-sticky-bar">
            <div id="event-show-middle-buttons">
              <button className="event-show-middle-button"><i className="fas fa-arrow-up fa-lg"></i></button>
              <button className="event-show-middle-button"><i className="far fa-heart fa-lg"></i></button>
            </div>
            <form>
              <button id="event-show-register-button">Register</button>
            </form>
          </section>

          <section id="event-show-additional-info">
            <div id="event-show-additional-info-left">
              <p className="event-show-heading">Description</p>
              <p className="event-show-description-general">{this.state.event.about}</p>
            </div>
            <div id="event-show-additional-info-right">
              <div className="event-show-additional-info-right-subsection">
                <p className="event-show-heading">Date and Time</p>
                <div className="event-show-additional-info-right-subsection-subsection">
                  <date className="event-show-right-subtext">{this.formatDate("startDate")} {(this.formatDate("endDate") === this.formatDate("startDate")) ? "" : `- ${this.formatDate("endDate")}`}</date>
                  {/* This is a problem. Both dates are showing up as same even though they should be two days apart */}
                  <time className="event-show-right-subtext">{this.setTime("startTime")} - {this.setTime("endTime")}</time>
                </div>
              </div>
              <div className="event-show-additional-info-right-subsection">
                <p className="event-show-heading">Location</p>
                <div className="event-show-additional-info-right-subsection-subsection">
                  <p className="event-show-right-subtext">{this.state.event.venue_name}</p>
                  <p className="event-show-right-subtext">{this.state.event.address}</p>
                  {/* <p className="event-show-right-subtext">{(address2) ? this.state.event.address2 : ""}</p> */}
                  <p className="event-show-right-subtext">{this.state.event.city}, {this.state.event.state} {this.state.event.zip}</p>
                </div>
              </div>
              <div className="event-show-additional-info-right-subsection">
                <p className="event-show-heading">Refund Policy</p>
                <div className="event-show-additional-info-right-subsection-subsection">
                  <p className="event-show-right-subtext">No Refunds</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default withRouter(EventShow);