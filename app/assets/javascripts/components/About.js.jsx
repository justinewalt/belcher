class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="twelve columns">
      <hr />
        <h3 className="text-center">About</h3>
          <div className="container about-text">
            <p>What is Belcher?</p>
            <p>Belcher is your solution to the everday question, 
            "Where should I/we eat?"  The reason why we created Belcher was to eliminate 
            the issue of choice overload.  Belcher was created to be 
            adpative, quick, and trust-worthy.  The application takes your prefered food
            choices and responses, then determines the best place to eat without overwhelming the user.  
            What makes Belcher unique, innovative, and beautiful?  
            Belcher responds to your feedback. Belcher is direct,
            percise, and appeals to your tastebuds.</p>
            <p>Special thanks to <a href="http://www.devpointlabs.com/">DevPoint Labs!</a></p>
            <p>Enjoy!</p>
          </div>
        <div className="text-center">
          <h3>Creators</h3>
          <div className="about-info three columns">
            <h4 className="about-first">Justin</h4>
            <h6 className="about-last">Ewalt</h6>
              <a href="https://github.com/justinewalt" target="_blank">
               <i className="contact-fa fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/justin-ewalt-21b3b57a" target="_blank">
               <i className="contact-fa fa fa-linkedin-square"></i></a>
               <i className="contact-fa fa fa-globe"></i>
            </div>
          <div className="about-info three columns">
            <h4 className="about-first">Brandon</h4>
            <h6 className="about-last">Huynh</h6>
              <a href="https://github.com/brandonvhuynh" target="_blank">
               <i className="contact-fa fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/brandon-huynh-a02655a6" target="_blank">
               <i className="contact-fa fa fa-linkedin-square"></i></a>
              <a href="" target="_blank">
               <i className="contact-fa fa fa-globe"></i></a>
            </div>
          <div className="about-info three columns">
            <h4 className="about-first">Gavyn</h4>
            <h6 className="about-last">Caldwell</h6>
              <a href="https://github.com/GavMan1995" target="_blank">
               <i className="contact-fa fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/gavyn-caldwell-207160112" target="_blank">
               <i className="contact-fa fa fa-linkedin-square"></i></a>
               <i className="contact-fa fa fa-globe"></i>
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