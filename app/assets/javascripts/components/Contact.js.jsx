class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(e) {
    e.preventDefault();
    email = this.refs.email.value;
    subject = this.refs.subject.value;
    message = this.refs.message.value;
    console.log(email);
    console.log(subject);
    console.log(message);
    this.refs.email.value = null;
    this.refs.subject.value = null;
    this.refs.message.value = null;
  }

  render() {
    return (
      <div className="twelve columns text-center">
      <hr />
        <h3>Contact</h3>
        <p>This is the Contact info paragraph</p>
        <div className="offset-by-three six columns">
         <form className="contact-form" onSubmit={this.sendMessage} >
          <input ref="email" className="subject-input" type="email" placeholder="Your Email (required)" required={true} />
          <input ref="subject" className="subject-input" type="text" placeholder="Subject (required)" required={true} />
          <br />
          <textarea ref="message" className="message-input" placeholder="Message (required)" required={true}></textarea>
          <br />
          <input type="submit" name="Send" className="button-primary" />
         </form>
        </div>
      </div>
    );
  }
}