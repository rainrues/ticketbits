# TicketBits

Welcome to [TicketBits](https://ticketbits.herokuapp.com/), a single-page clone of [EventBrite](https://www.eventbrite.com/). TicketBits is a website for browsing events, creating events, and buying tickets for events.

Homepage has been updated since cloning. To see original copied page go to: https://web.archive.org/web/20190417003843/https://www.eventbrite.com/

### Technologies
TicketBits uses React, Redux, HTML/SASS and Javascript ES6 to dynamically generate the frontend, and SQL, PostgreSQL, ActiveRecord, and Ruby on Rails for data management on the backend.

## Features

+ Responsive signin page that will send you to sign up or sign in based on the email you input. 
![sign in](https://github.com/rainrues/ticketbits/blob/master/app/assets/images/Sign%20in%20Recording%20(1)%20(1).mov?raw=true)

### User Authentication
Users can securely sign up, log in, and log out simply by setting an email address and password for their account.
Users who are signed in can access different features via the nav bar.

![signed out](https://github.com/rainrues/ticketbits/blob/Master/app/assets/images/NavBarSignedOut.png?raw=true)
![signed in](https://github.com/rainrues/ticketbits/blob/Master/app/assets/images/NavBarSignedIn.png?raw=true)

### Structure
TicketBits' main components are as follows:

1. NavBar
  - Main navigation for the application
2. Splash Page
  - Includes banner image
  - Includes search bar
  - Shows all events
  
3. Styled Event Creation Form

4. Event Browse page

#### Future Features

1. Search
2. Categories
3. Liking Events
