import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
  }

  // renderErrors(field) {
  //   return (
  //     <div>
  //       {this.props.errors.find(error => error.includes(field))}
  //     </div>
  //   );
  // }

  update(field) {
    return (e) => {
      // debugger;
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state).then((event) => this.props.history.push(`/events/${event.event.id}`));
  }

  render() {
    return (
      <div className="event-form">

        <div className="event-create-topmost-bar">
          <h1 id="create-an-event-text">Create An Event</h1>
          <button className="event-create-submit-button" onClick={(e) => this.handleSubmit(e)}>Publish</button>
        </div>

        <div className="create-event-header-bar"></div>

        <div>
          <div className="form-section-header">
            <div className="form-section-number">1</div>
            <div className="form-section-title">Event Details</div>
          </div>

          <form>
            <h2 className="create-event-form-headings">Event Title</h2>
            <label htmlFor="Event Title">
              <input type="text" onChange={this.update('title')} value={this.state.title} id='Event Title' />
            </label>
            {/* <p>{this.renderErrors("title")}</p> */}

            <h2 className="create-event-form-headings">Age</h2>
            <label htmlFor="Age">
              <input type="text" onChange={this.update('age')} value={this.state.age} id='Age' />
            </label>
            {/* <p>{this.renderErrors("age")}</p> */}

            <h2 className="create-event-form-headings">Location</h2>
            <div className="event-form-location-inputs">
              <label htmlFor="Venue Name">
                <input type="text" onChange={this.update('venue_name')} placeholder="Venue Name" value={this.state.venue_name} id='Venue Name' />
              </label>
              {/* <p>{this.renderErrors("venue_name")}</p> */}
              <label htmlFor="Address">
                <input type="text" onChange={this.update('address')} placeholder="Address" value={this.state.address} id='Address' />
              </label>
              {/* <p>{this.renderErrors("address2")}</p> */}
              <label htmlFor="Address 2">
                <input type="text" onChange={this.update('address2')} placeholder="Address 2" value={this.state.address2} id='Address 2' />
              </label>
              {/* <p>{this.renderErrors("address2")}</p> */}
              <label htmlFor="City">
                <input type="text" onChange={this.update('city')} placeholder="City" value={this.state.city} id='City' />
              </label>
              {/* <p>{this.renderErrors("city")}</p> */}
              <div className="event-form-city/zip-inputs">
                <label htmlFor="State">
                  <input type="text" onChange={this.update('state')} placeholder="State" value={this.state.state} id='State' />
                </label>
                {/* <p>{this.renderErrors("state")}</p> */}
                <label htmlFor="Zip">
                  <input type="text" onChange={this.update('zip')} placeholder="Zip" value={this.state.zip} id='Zip' />
                </label>
              </div>
              {/* <p>{this.renderErrors("zip")}</p> */}
              <label htmlFor="Country">
                <input type="text" onChange={this.update('country')} placeholder="Country" value={this.state.country} id='Country' />
              </label>
              {/* <p>{this.renderErrors("country")}</p> */}
            </div>

            <div className="event-form-date/time-info">
              <div>
                <h2 className="create-event-form-headings">Starts</h2>
                <label htmlFor="Start Date">
                  <input type="date" onChange={this.update('start_date')} value={this.state.start_date} label="Start Date" />
                </label>
                {/* {this.props.errors.find(error => error.includes('Start Date')) ? <div>Starting date can't be blank</div> : <div></div>} */}
                <label htmlFor="Start Time">
                  <input type="time" onChange={this.update('start_time')} value={this.state.start_time} label="Start Time" />
                </label>
                {/* {this.props.errors.find(error => error.includes('Start Time')) ? <div>Starting time can't be blank</div> : <div></div>} */}
              </div>
              <div>
                <h2 className="create-event-form-headings">Ends</h2>
                <label htmlFor="End Date">
                  <input type="date" onChange={this.update('end_date')} value={this.state.end_date} label="End Date" />
                </label>
                {/* {this.props.errors.find(error => error.includes('End Date')) ? <div>Ending date can't be blank</div> : <div></div>} */}
                <label htmlFor="End Time">
                  <input type="time" onChange={this.update('end_time')} value={this.state.end_time} label="End Time" />
                </label>
                {/* {this.props.errors.find(error => error.includes('End Time')) ? <div>Ending time can't be blank</div> : <div></div>} */}
              </div>
            </div>

            <h2 className="create-event-form-headings">Event Image</h2>
            <label htmlFor="Event Image">
              <input type="text" onChange={this.update('image_url')} value={this.state.image_url} id='Event Image' />
            </label>
            {/* <p>{this.renderErrors("image_url")}</p> */}
            <span>We recommend using at least a 2160x1080px (2:1 ratio) image that's no larger than 10MB. Learn more.</span>

            <h2 className="create-event-form-headings">Event Description</h2>
            <label htmlFor="Event Description">
              <textarea name="" id="" cols="30" rows="10" onChange={this.update('about')} id='Event Description' value={this.state.about}></textarea>
            </label>
            {/* <p>{this.renderErrors("about")}</p> */}

            <div>
              <div className="form-section-number">2</div>
              <div className="form-section-title">Tickets</div>
            </div>

            <h2 className="create-event-form-headings">Number of Tickets</h2>
            <label htmlFor="Number of Tickets">
              <input type="number" step="1" onChange={this.update('num_tickets')} value={this.state.num_tickets} id='Number of Tickets' />
            </label>
            {/* <p>{this.renderErrors("num_tickets")}</p> */}

            <h2 className="create-event-form-headings">Price</h2>
            <label htmlFor="price">
              <input type="number" step="1" onChange={this.update('price')} value={this.state.price} id='price' />
            </label>
            {/* <p>{this.renderErrors("price")}</p>     */}
          </form>
        </div>



      </div>
    );
  }




}

export default withRouter(CreateEvent);