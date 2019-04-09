import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../Footer/footer';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
  }

  // errors(field) {
  //   return (
  //     <div>
  //       {this.props.errors.find(error => error.includes(field))}
  //     </div>
  //   );
  // }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state).then((event) => this.props.history.push(`/events/${event.event.id}`));
  }

  render() {
    return (
      <main className="event-form">

        <section className="event-create-topmost-bar">
          <h1 id="create-an-event-text">Create An Event</h1>
          <button className="event-create-submit-button" onClick={(e) => this.handleSubmit(e)}>Publish</button>
        </section>

        <div className="create-event-header-bar"></div>

        <form id="event-form-main-body">

          <div className="form-section-header">
            <div className="form-section-number">1</div>
            <div className="form-section-title">Event Details</div>
            <p className="form-section-tips">Tips</p>
          </div>

          <div className="form-input-item-container">
            <h2 className="create-event-form-input-headings">Event Title</h2>
            <label htmlFor="Event Title">
              <input className="create-event-form-input" type="text" onChange={this.update('title')} value={this.state.title} id='Event Title' />
            </label>
            {/* <p>{this.renderErrors("title")}</p> */}
          </div>

          <div className="form-input-item-container">
            <h2 className="create-event-form-input-headings">Age</h2>
            <label htmlFor="Age">
              <input className="create-event-form-input" type="text" onChange={this.update('age')} value={this.state.age} id='Age' />
            </label>
            {/* <p>{this.renderErrors("age")}</p> */}
          </div>

          <div className="form-input-item-container">
            <h2 className="create-event-form-input-headings">Location</h2>
            <div className="event-form-location-inputs">
              <label htmlFor="Venue Name">
                <input className="create-event-form-input" type="text" onChange={this.update('venue_name')} placeholder="Venue Name" value={this.state.venue_name} id='Venue Name' />
              </label>
              {/* <p>{this.renderErrors("venue_name")}</p> */}
              <label htmlFor="Address">
                <input className="create-event-form-input" type="text" onChange={this.update('address')} placeholder="Address" value={this.state.address} id='Address' />
              </label>
              {/* <p>{this.renderErrors("address2")}</p> */}
              <label htmlFor="Address 2">
                <input className="create-event-form-input" type="text" onChange={this.update('address2')} placeholder="Address 2" value={this.state.address2} id='Address 2' />
              </label>
              {/* <p>{this.renderErrors("address2")}</p> */}
              <label htmlFor="City">
                <input className="create-event-form-input" type="text" onChange={this.update('city')} placeholder="City" value={this.state.city} id='City' />
              </label>
              {/* <p>{this.renderErrors("city")}</p> */}
              <div className="form-two-per-line-formatting">
                <label htmlFor="State">
                  <input className="create-event-form-input-small" type="text" onChange={this.update('state')} placeholder="State" value={this.state.state} id='State' />
                </label>
                {/* <p>{this.renderErrors("state")}</p> */}
                <label htmlFor="Zip">
                  <input className="create-event-form-input-small" type="text" onChange={this.update('zip')} placeholder="Zip" value={this.state.zip} id='Zip' />
                </label>
              </div>
              {/* <p>{this.renderErrors("zip")}</p> */}
              <label htmlFor="Country">
                <input className="create-event-form-input" type="text" onChange={this.update('country')} placeholder="Country" value={this.state.country} id='Country' />
              </label>
              {/* <p>{this.renderErrors("country")}</p> */}
            </div>
          </div>

          <div className="form-input-item-container form-two-per-line-formatting">
            <div className="event-form-start-end-info">
              <h2 className="create-event-form-input-headings">Starts</h2>
              <label htmlFor="Start Date">
                <input className="create-event-form-input-small" type="date" onChange={this.update('start_date')} value={this.state.start_date} label="Start Date" />
              </label>
              {/* {this.props.errors.find(error => error.includes('Start Date')) ? <div>Starting date can't be blank</div> : <div></div>} */}
              <label htmlFor="Start Time">
                <input className="create-event-form-input-small" type="time" onChange={this.update('start_time')} value={this.state.start_time} label="Start Time" />
              </label>
              {/* {this.props.errors.find(error => error.includes('Start Time')) ? <div>Starting time can't be blank</div> : <div></div>} */}
            </div>
            <div className="event-form-start-end-info">
              <h2 className="create-event-form-input-headings">Ends</h2>
              <label htmlFor="End Date">
                <input className="create-event-form-input-small" type="date" onChange={this.update('end_date')} value={this.state.end_date} label="End Date" />
              </label>
              {/* {this.props.errors.find(error => error.includes('End Date')) ? <div>Ending date can't be blank</div> : <div></div>} */}
              <label htmlFor="End Time">
                <input className="create-event-form-input-small" type="time" onChange={this.update('end_time')} value={this.state.end_time} label="End Time" />
              </label>
              {/* {this.props.errors.find(error => error.includes('End Time')) ? <div>Ending time can't be blank</div> : <div></div>} */}
            </div>
          </div>

          <div className="form-input-item-container">
            <h2 className="create-event-form-input-headings">Event Image</h2>
            <label htmlFor="Event Image">
              <input className="create-event-form-input" placeholder="Image url" type="text" onChange={this.update('image_url')} value={this.state.image_url} id='Event Image' />
            </label>
            {/* <p>{this.renderErrors("image_url")}</p> */}
            <br/>
            <span className="form-section-tips" id="event-form-photo-instructions">We recommend using at least a 2160x1080px (2:1 ratio) image that's no larger than 10MB. Learn more.</span>
          </div>

          <div className="form-input-item-container">
            <h2 className="create-event-form-input-headings">Event Description</h2>
            <label htmlFor="Event Description">
              <textarea name="" id="" cols="111" rows="10" onChange={this.update('about')} id='Event Description' value={this.state.about}></textarea>
            </label>
            {/* <p>{this.renderErrors("about")}</p> */}
          </div>

          <div className="form-section-header">
            <div className="form-section-number">2</div>
            <div className="form-section-title">Tickets</div>
            <p className="form-section-tips">Tips</p>
          </div>

          <div className="form-input-item-container">
            <h2 className="create-event-form-input-headings">Number of Tickets</h2>
            <label htmlFor="Number of Tickets">
              <input className="create-event-form-input-small" type="number" step="1" onChange={this.update('num_tickets')} value={this.state.num_tickets} id='Number of Tickets' />
            </label>
            {/* <p>{this.renderErrors("num_tickets")}</p> */}
          </div>

          <div className="form-input-item-container">
            <h2 className="create-event-form-input-headings">Price</h2>
            <label htmlFor="price">
              <input className="create-event-form-input-small" type="number" step="1" onChange={this.update('price')} value={this.state.price} id='price' />
            </label>
            {/* <p>{this.renderErrors("price")}</p>     */}
          </div>

        </form>

        <div>
          <Footer />
        </div>

      </main>
    );
  }




}

export default withRouter(CreateEvent);