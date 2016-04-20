class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.sendMail = this.sendMail.bind(this);
  }

  sendMail(e) {
    e.preventDefault();
    let body = `Email: ${this.refs.email.value}\nSubject: ${this.refs.subject.value}\nMessage: ${this.refs.message.value}`
    $.ajax({
      url: '/contact_us',
      type: 'POST',
      data: { body: body}
    }).done( data => {
      this.refs.email.value = null;
      this.refs.subject.value = null;
      this.refs.message.value = null;
      window.location.assign('/')
    }).fail( error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="twelve columns top-margin text-center">
        <h3 className="contact-title">Contact</h3>
        <p>Send us a message.</p>
        <div className="offset-by-three six columns">
         <form className="contact-form" onSubmit={this.sendMail} >
          <input ref="email" className="subject-input" type="email" placeholder="Your Email (required)" required={true} />
          <input ref="subject" className="subject-input" type="text" placeholder="Subject (required)" required={true} />
          <br />
          <textarea ref="message" className="message-input" placeholder="Message (required)" required={true}></textarea>
          <br />
          <button className="contact-button">Send</button>
         </form>
        </div>
      </div>
    );
  }
}