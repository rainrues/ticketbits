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
      return `${this.setMonth("startDate")} ${this.state.start_date_object.date}, ${this.setTime("startTime")}`;
    } else {
      return `${this.setMonth("endDate")} ${this.state.end_date_object.date}, ${this.setTime("endTime")}`;
    }
  }

  componentDidMount() {
    if (!this.state.event) {
      this.props.fetchEvent(this.props.match.params.eventId).then( event => this.setState({event: event.event}));
    }
    scrollTo(0, 0);
  }

  render() {
    if (!this.state.event) {
      return null;
    }
  
    if (this.state.price === 0) {
      this.setState(this.props.event.price = "Free");
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
                  <p id="event-show-top-producer">by User Number {this.state.event.user_id}</p>
                </div>
              </div>
              <div>
                <p id="event-show-top-price">{this.state.event.price}</p>
              </div>
            </div>
          </section>

          <section id="event-show-sticky-bar">
            <div>
              <button className="event-show-middle-button"><i className="fas fa-arrow-up fa-lg"></i></button>
              <button className="event-show-middle-button"><i className="far fa-heart fa-lg"></i></button>
            </div>
            <form>
              <button id="event-show-resister-button">Register</button>
            </form>
          </section>
          <p id="event-show-description-heading">Description</p>
          <p id="event-show-description">{this.state.event.about}</p>
        </main>

        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default withRouter(EventShow);