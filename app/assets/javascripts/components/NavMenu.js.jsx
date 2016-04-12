class NavMenu extends React.Component {
  constructor(props){
    super(props)
  }

  menu(){
    if (this.props.isOpen) {
      return(<div className="hamburger-menu">
                <div className="hamburger-content">
                  <p className="hamburger-text">
                    <i className="fa fa-user nav-icon"></i>
                    <a> Profile</a>
                  </p>
                  <p className="hamburger-text">
                    <i className="fa fa-filter nav-icon"></i>
                    <a> Preferences</a>
                  </p>
                  <p className="hamburger-text">
                    <i className="fa fa-info-circle nav-icon"></i>
                    <a> About</a></p>
                  <p className="hamburger-text">
                  <i className="fa fa-envelope nav-icon"></i>
                    <a>Contact</a></p>
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
