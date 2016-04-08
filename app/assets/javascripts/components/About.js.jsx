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
            <p>Enjoy!</p>
          </div>
        <div className="text-center">
          <div className="about-info three columns">
            <h4>Justin</h4>
              <a href="" target="_blank">
               <i className="contact-fa fa fa-github"></i></a>
              <a href="" target="_blank">
               <i className="contact-fa fa fa-linkedin-square"></i></a>
              <a href="" target="_blank">
               <i className="contact-fa fa fa-globe"></i></a>
            </div>
          <div className="about-info three columns">
            <h4>Gavyn</h4>
              <a href="" target="_blank">
               <i className="contact-fa fa fa-github"></i></a>
              <a href="" target="_blank">
               <i className="contact-fa fa fa-linkedin-square"></i></a>
              <a href="" target="_blank">
               <i className="contact-fa fa fa-globe"></i></a>
            </div>
          <div className="about-info three columns">
            <h4>Brandon</h4>
              <a href="" target="_blank">
               <i className="contact-fa fa fa-github"></i></a>
              <a href="" target="_blank">
               <i className="contact-fa fa fa-linkedin-square"></i></a>
              <a href="" target="_blank">
               <i className="contact-fa fa fa-globe"></i></a>
            </div>
          <div className="about-info three columns">
            <h4>Garrett</h4>
              <a href="" target="_blank">
               <i className="contact-fa fa fa-github"></i></a>
              <a href="" target="_blank">
               <i className="contact-fa fa fa-linkedin-square"></i></a>
              <a href="https://garrettstott.herokuapp.com/" target="_blank">
               <i className="contact-fa fa fa-globe"></i></a>
          </div>
        </div>
      </div>
    );
  }
}