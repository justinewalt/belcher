class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    let links = "" 
    if (this.props.userLogIn) {
      links = 
        <div>
          <p className="nav-link"><a href={this.props.links.logOut}> Logout</a></p>
        </div>
    } else {
      links = 
        <div>
          <p className="nav-link"><a href={this.props.links.logIn}>Log In</a></p>
          <p className="nav-link"><a href={this.props.links.signUp}>Sign Up</a></p>
        </div>
    }
    return (
      <div className="nav-bar">
        <Hamburger toggleMenuOpen={this.props.toggleMenuOpen} />
        <img className="icon" src='http://www.clipartbest.com/cliparts/9cp/oq6/9cpoq6rRi.png' />
        <h2 className="logo"><a href={this.props.links.belcher}>Belcher</a></h2>
        {links}
      </div>
    );
  }
  
}