class Hamburger extends React.Component {
  constructor(props){
    super(props);
    this.state = {isOpen: false};
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(){
    this.setState({isOpen: !this.state.isOpen})
  }

  menu(){
    if (this.state.isOpen) {
      return(<div className="hamburger-menu">
                <div className="hamburger-content">
                  <p>Profile</p>
                  <p>Preferences</p>
                  <p>About</p>
                  <p>Contact Us</p>
                </div>
             </div>
            )
    }
  }

  render(){
    return(
      <div>
        <p onClick={this.toggleOpen} className="hamburger"><a><i className="fa fa-bars fa-3x ham-icon"></i></a></p>
        {this.menu()}
      </div>
    );
  }
}