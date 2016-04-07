class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="twelve columns">
        <h3 className="text-center">About</h3>
        <hr />
        <p>This is the About info paragraph</p>
        <div className="text-center">
          <div className="about-info three columns">
            <h4>Justin</h4>
              <i className="contact-fa fa fa-twitter"></i>
              <i className="contact-fa fa fa-linkedin-square"></i>
              <i className="contact-fa fa fa-facebook-official"></i>
            </div>
          <div className="about-info three columns">
            <h4>Gavyn</h4>
              <i className="contact-fa fa fa-twitter"></i>
              <i className="contact-fa fa fa-linkedin-square"></i>
              <i className="contact-fa fa fa-facebook-official"></i>
            </div>
          <div className="about-info three columns">
            <h4>Brandon</h4>
              <i className="contact-fa fa fa-twitter"></i>
              <i className="contact-fa fa fa-linkedin-square"></i>
              <i className="contact-fa fa fa-facebook-official"></i>
            </div>
          <div className="about-info three columns">
            <h4>Garrett</h4>
              <i className="contact-fa fa fa-twitter"></i>
              <i className="contact-fa fa fa-linkedin-square"></i>
              <i className="contact-fa fa fa-facebook-official"></i>
          </div>
        </div>
      </div>
    );
  }
}