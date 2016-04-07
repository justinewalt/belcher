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
                  <a>Profile</a>
                  <a>Preferences</a>
                  <a>About</a>
                  <a>Contact Us</a>
                </div>
             </div>
            );
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