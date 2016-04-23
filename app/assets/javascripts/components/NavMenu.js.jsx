// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class NavMenu extends React.Component {
  constructor(props){
    super(props);
    this.sideNavLogin = this.sideNavLogin.bind(this);
  }

  menu(){
    if (this.props.isOpen) {
      return(<div className="hamburger-menu">
                <div className="hamburger-content">
                  <a href='/about'><p className="hamburger-text">
                    <i className="fa fa-info-circle nav-icon"></i>
                    About</p></a>
                  <a href='/contact'><p className="hamburger-text">
                    <i className="fa fa-envelope nav-icon"></i>
                    Contact</p></a>
                {this.sideNavLogin() }
                </div>
             </div>
            );
    }
  }

  sideNavLogin() {
    if (this.props.userLogIn) {
     return(
      <nav>
        <a href="/profile"><p className="hamburger-text">
          <i className="fa fa-user nav-icon"></i>
          Profile</p></a>
        <a data-method="delete" href={this.props.links.logOut}><p className="hamburger-text">
          <i className="fa fa-sign-out nav-icon"></i>
          Logout</p></a>
      </nav>
      )
    } else {
      return(
        <nav>
          <a href={this.props.links.logIn}><p className="hamburger-text">
            <i className="fa fa-sign-in nav-icon"></i>
            Log In</p></a>
          <a href={this.props.links.signUp}><p className="hamburger-text">
            <i className="fa fa-user-plus nav-icon"></i>
            Sign Up</p></a>
        </nav>
      )
    }
  }

  render() {
    return(
      <div>
        { this.menu() }
      </div>
    )
  }
}
