class Hamburger extends React.Component {
  constructor(props){
    super(props);
    this.state = {isOpen: false};
  }

  render(){
    return(
      <div>
        <p onClick={this.props.toggleMenuOpen} className="hamburger"><i className="fa fa-bars fa-2x ham-icon"></i></p>
      </div>
    );
  }
}