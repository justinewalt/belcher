class NavMenu extends React.Component {
  constructor(props){
    super(props)
  }

  menu(){
    if (this.props.isOpen) {
      return(<div className="hamburger-menu">
                <div className="hamburger-content">
                  <p><a><i className="fa fa-user nav-icon"></i> Profile</a></p>
                  <p><a><i className="fa fa-filter nav-icon"></i> Preferences</a></p>
                  <p><a><i className="fa fa-info-circle nav-icon"></i> About</a></p>
                  <p><a><i className="fa fa-envelope nav-icon"></i> Contact Us</a></p>
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