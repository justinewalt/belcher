class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="twelve columns top-margin">
        <h3 className="text-center">About</h3>
          <div className="container about-text">
            <p>What is Belcher?</p>
            <p>Belcher is your solution to the everyday question, 
            "Where should we eat?"  The reason we created Belcher was to eliminate 
            the issue of choice overload--to be 
            adaptive, quick and trustworthy.  We take your preferred food
            choices, then provide the perfect place to get your grub on!  
            What makes Belcher so unique and innovative?  
            Belcher responds to your feedback. Belcher is direct,
            precise and appeals to your tastebuds.</p>
            <p>Special thanks to <a href="http://www.devpointlabs.com/" target="_blank">DevPoint Labs!</a></p>
            <p>Enjoy!</p>
          </div>
        <div className="container top-margin text-center">
          <h3 className="the-team">The Team</h3>
          <div className="about-info three columns">
            <h4 className="about-first">Justin</h4>
            <h6 className="about-last">Ewalt</h6>
              <a href="https://github.com/justinewalt" target="_blank">
               <i className="contact-fa fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/justin-ewalt-21b3b57a" target="_blank">
               <i className="contact-fa fa fa-linkedin-square"></i></a>
              <a href="http://www.justinewalt.com" target="_blank">
               <i className="contact-fa fa fa-globe"></i></a>
            </div>
          <div className="about-info three columns">
            <h4 className="about-first">Brandon</h4>
            <h6 className="about-last">Huynh</h6>
              <a href="https://github.com/brandonvhuynh" target="_blank">
               <i className="contact-fa fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/brandon-huynh-a02655a6" target="_blank">
               <i className="contact-fa fa fa-linkedin-square"></i></a>
              <a href="http://www.huynh-brandon.com" target="_blank">
               <i className="contact-fa fa fa-globe"></i></a>
            </div>
          <div className="about-info three columns">
            <h4 className="about-first">Gavyn</h4>
            <h6 className="about-last">Caldwell</h6>
              <a href="https://github.com/GavMan1995" target="_blank">
               <i className="contact-fa fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/gavyn-caldwell-207160112" target="_blank">
               <i className="contact-fa fa fa-linkedin-square"></i></a>
               <a href="http://www.gavyncaldwell.com/" target="_blank"><i className="contact-fa fa fa-globe"></i></a>
            </div>
          <div className="about-info three columns">
            <h4 className="about-first">Garrett</h4>
            <h6 className="about-last">Stott</h6>
              <a href="https://github.com/garrettstott" target="_blank">
               <i className="contact-fa fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/garrett-stott-4262b1104" target="_blank">
               <i className="contact-fa fa fa-linkedin-square"></i></a>
              <a href="http://www.garrettstott.com" target="_blank">
               <i className="contact-fa fa fa-globe"></i></a>
          </div>
        </div>
      </div>
    );
  }
}