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
                  <p className="hamburger-text">
                    <i className="fa fa-info-circle nav-icon"></i>
                    <a href='/about'> About</a></p>
                  <p className="hamburger-text">
                  <i className="fa fa-envelope nav-icon"></i>
                  <a href='/contact'>Contact</a></p>
                {this.sideNavLogin() }
                </div>
             </div>
            );
    }
  }

  sideNavLogin() {
    if (this.props.userLogIn) {
     return(
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <nav key='nav'>
          <p className="hamburger-text">
            <i className="fa fa-user nav-icon"></i>
            <a> Profile</a></p>
          <p className="hamburger-text">
            <i className="fa fa-filter nav-icon"></i>
            <a> Preferences</a></p> 
          <p className="hamburger-text">
            <i className="fa fa-sign-out nav-icon"></i>
            <a data-method="delete" href={this.props.links.logOut}> Logout</a></p>
        </nav>
      </ReactCSSTransitionGroup>
        )
    } else {
      return(
        <nav>
          <p className="hamburger-text">
            <i className="fa fa-sign-in nav-icon"></i>
            <a href={this.props.links.logIn}> Log In</a></p>
          <p className="hamburger-text">
            <i className="fa fa-user-plus nav-icon"></i>
            <a href={this.props.links.signUp}>Sign Up</a></p>
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
