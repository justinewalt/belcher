let ReactCSSTransitionGroup = 'react-addons-css-transition-group';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menuOpen: false};
    this.toggleMenuOpen = this.toggleMenuOpen.bind(this);
  }

  toggleMenuOpen(){
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() { 
    let links = "" 
    if (this.props.userLogIn) {
      links = 
        <div>
          <p className="nav-link"><a data-method="delete" href={this.props.links.logOut}> Logout</a></p>
        </div>
    } else {
      links = 
        <div>
          <p className="nav-link"><a href={this.props.links.logIn}>Log In</a></p>
          <p className="nav-link"><a href={this.props.links.signUp}>Sign Up</a></p>
        </div>
    }
    return (
      <div>
        <div className="nav-bar">
          <Hamburger toggleMenuOpen={this.toggleMenuOpen} />
          <a href={this.props.links.belcher}><img className="icon" src='http://i.imgur.com/VsD1hGj.png' /></a>
          <h2 className="logo"><a href={this.props.links.belcher}>Belcher</a></h2>
          {links}
        </div>
        <div className="nav-menu">
          <ReactCSSTransitionGroup transitionName="toggle-slide" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <NavMenu isOpen={this.state.menuOpen} links={this.props.links} userLogIn={this.props.userLogIn} key="navmenu" />
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}