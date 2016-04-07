class NavMenu extends React.Component {
  constructor(props){
    super(props)
  }

  menu(){
    if (this.props.isOpen) {
      return(<div className="hamburger-menu">
                <div className="hamburger-content">
                  <p><a>Profile</a></p>
                  <p><a>Preferences</a></p>
                  <p><a>About</a></p>
                  <p><a>Contact Us</a></p>
                </div>
             </div>
            );
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