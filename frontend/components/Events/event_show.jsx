// import React from 'react';
// import CreateUserTicketFormContainer from "../user_tickets/create_user_ticket_form_container";

// class EventShow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.createStartDate = this.createStartDate.bind(this);
//     this.setMonth = this.setMonth.bind(this);
//     this.setTime = this.setTime.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//     this.modal = null;
//     this.findTicketId = this.findTicketId.bind(this);
//   }

//   componentDidMount() {
//     window.scrollTo(0, 0);
//     this.props.fetchEvent(this.props.match.params.eventId)
//       .then(action => this.props.fetchAllTickets(action.event.id))
//   }

//   createStartDate() {
//     const days = ["", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

//     let weekday = days[this.props.event.startDateObj.cwday];
//     return `${weekday}, ${this.setMonth()} ${this.props.event.startDateObj.date}, ${this.props.event.startDateObj.year}, ${this.setTime()}`;

//   }

//   handleClick() {
//     let modal = document.getElementsByClassName("backdrop")[0];
//     modal.style.display = "block";
//     window.onclick = e => {
//       if (e.target == modal) {
//         return modal.style.display = "none";
//       }
//     }
//   }

//   closeModal() {
//     let modal = document.getElementsByClassName("backdrop")[0];
//     modal.style.display = "none";
//   }

//   setMonth() {
//     const months = {
//       1: "Jan",
//       2: "Feb",
//       3: "Mar",
//       4: "Apr",
//       5: "May",
//       6: "Jun",
//       7: "Jul",
//       8: "Aug",
//       9: "Sep",
//       10: "Oct",
//       11: 'Nov',
//       12: 'Dec'
//     }
//     return months[this.props.event.startDateObj.month]
//   }

//   setTime() {
//     let hour = ""
//     let min = ""
//     let meridian = ""
//     if (this.props.event.startTimeObj.hour > 12) {
//       hour = `${this.props.event.startTimeObj.hour - 12}`;
//       meridian = "PM";
//     } else if (this.props.event.startTimeObj.hour === 0) {
//       hour = "12";
//       meridian = "AM";
//     } else {
//       hour = `${this.props.event.startTimeObj.hour}`;
//       meridian = "AM";
//     }

//     if (this.props.event.startTimeObj.minute < 10) {
//       min = `0${this.props.event.startTimeObj.minute}`;
//     } else {
//       min = `${this.props.event.startTimeObj.minute}`;
//     }

//     return `${hour}:${min} ${meridian}`;
//   }

//   findTicketId() {
//     let tickets = Object.keys(this.props.tickets);
//     for (let i = 0; i < tickets.length; i++) {
//       let ticket = this.props.tickets[tickets[i]];
//       if (ticket.eventId === this.props.event.id) {
//         return ticket.id;
//       }
//     }
//   }

//   render() {
//     if (this.props.event === undefined || this.props.tickets === undefined) {
//       return null;
//     }
//     return <div className="event-listing-background">
//       <div className="event-listing-grid">
//         <div className="event-listing-body">
//           <div className="event-listing-header-info">
//             <div className="event-listing-header-image"
//               style={{ backgroundImage: `url(${this.props.event.photoUrl})` }}>

//             </div>
//             <div className="event-header-info-block">
//               <div className="info-block-wrapper">
//                 <div className="event-header-start-date">
//                   <time className="date">
//                     <p>{this.setMonth()}</p>
//                     <p>{this.props.event.startDateObj.date}</p>
//                   </time>
//                 </div>

//                 <div className="event-header-title">
//                   <h1>{this.props.event.title}</h1>

//                   <h2>{this.props.event.organizerName}</h2>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="event-listing-bookmark">
//             <div className="bookmark-content-wrapper">
//               <div className="placeholder" />

//               <div className="bookmark-ticket-button-wrapper">
//                 <button onClick={() => this.handleClick()} className="bookmark-ticket-button">
//                   tickets
//                   </button>
//               </div>
//             </div>
//           </div>

//           <div className="event-listing-detailed-info">
//             <div className="info-wrapper">
//               <div className="event-description-and-tags">
//                 <div className="event-description-wrapper">
//                   <div className="event-description">
//                     <h2 className="event-label">Description</h2>
//                     <p className="event-description-body">
//                       {this.props.event.description}
//                     </p>
//                   </div>

//                   <div className="event-tags" />
//                 </div>
//               </div>

//               <div className="event-time-location">
//                 <div className="time">
//                   <p className="event-label">Date and Time</p>
//                   <div className="event-date">
//                     <p>{this.createStartDate()}</p>
//                   </div>
//                 </div>

//                 <div className="event-location">
//                   <p className="event-label">Location</p>
//                   <div className="location">
//                     <p>{this.props.event.venueName}</p>
//                     <p>{this.props.event.address}</p>
//                     <p>
//                       {this.props.event.city}, {this.props.event.state} {this.props.event.zip}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="organizer-info-wrapper">
//             <div className="organizer-name-desc-wrapper">
//               <div className="organizer-name-desc">
//                 <div className="organizer-name">
//                   <a className="o-name">{this.props.event.organizerName}</a>
//                 </div>

//                 <div className="organizer-event-description">
//                   <p className="o-ev-desc">
//                     Organizer of {this.props.event.title}
//                   </p>
//                 </div>

//                 <div className="organizer-desc">
//                   <p className="o-desc">
//                     {this.props.event.organizerDescription}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className="backdrop">
//           <div className="modal">
//             <CreateUserTicketFormContainer tickets={this.props.tickets} ticketId={this.findTicketId()} closeModal={this.closeModal} />
//           </div>
//         </div>
//       </div>
//     </div>;
//   }
// }

// export default EventShow;