class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="twelve columns">
        <h3 className="text-center">Contact</h3>
        <hr />
        <p>This is the Contact info paragraph</p>
         <form>
          <input type="text" placeholder="Your Email Address" />
          <br />
          <input type="text" placeholder="Subject" />
          <br />
          <input type="text" placeholder="Message" />
          <br />
          <input type="submit" name="Send" className="button-primary" />
        </form>
      </div>
    );
  }
}