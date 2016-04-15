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
          <img className="icon" src='http://www.clipartbest.com/cliparts/9cp/oq6/9cpoq6rRi.png' />
          <h2 className="logo"><a href={this.props.links.belcher}>Belcher</a></h2>
          {links}
        </div>
        <div>
          <NavMenu isOpen={this.state.menuOpen} links={this.props.links} userLogIn={this.props.userLogIn}  />
        </div>
      </div>
    );
  }

  
}