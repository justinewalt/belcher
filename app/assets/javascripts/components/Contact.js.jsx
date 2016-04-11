class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.sendMail = this.sendMail.bind(this);
  }

  sendMail() {
    let body = `${this.refs.email.value}\n${this.refs.subject.value}\n${this.refs.message.value}`
    $.ajax({
      url: '/contact_us',
      type: 'POST',
      data: { body: body}
    }).done( data => {
      this.refs.email.value = null;
      this.refs.subject.value = null;
      this.refs.message.value = null;
    }).fail( error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="twelve columns text-center">
      <hr />
        <h3>Contact</h3>
        <p>Happy? Sad? Indifferent?</p>
        <p>Send us a message.</p>
        <div className="offset-by-three six columns">
         <form className="contact-form" onSubmit={this.sendMail} >
          <input ref="email" className="subject-input" type="email" placeholder="Your Email (required)" required={true} />
          <input ref="subject" className="subject-input" type="text" placeholder="Subject (required)" required={true} />
          <br />
          <textarea ref="message" className="message-input" placeholder="Message (required)" required={true}></textarea>
          <br />
          <input type="submit" className="button-primary" />
         </form>
        </div>
      </div>
    );
  }
}