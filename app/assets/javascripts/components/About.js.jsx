class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="twelve columns">
      <hr />
        <h3 className="text-center">About</h3>
        <p className="text-center">This is the About info paragraph</p>
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