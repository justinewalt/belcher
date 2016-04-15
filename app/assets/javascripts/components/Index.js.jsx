class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menuOpen: false};
    this.toggleMenuOpen = this.toggleMenuOpen.bind(this)
  }

  toggleMenuOpen(){
    this.setState({menuOpen: !this.state.menuOpen})
  }


  render() {
     return(
      <div>
        <Navigation links={this.props.links}
                    userLogIn={this.props.userLogIn}
                    toggleMenuOpen={this.toggleMenuOpen}
                    />
        <SearchIndex />
        <NavMenu isOpen={this.state.menuOpen}
                  links={this.props.links} 
                  userLogIn={this.props.userLogIn}
                  />
      </div>
    );
  }
}
