class DistanceGrid extends React.Component {
  constructor(props) {
    super(props);
    this.toggleButtons = this.toggleButtons.bind(this);
    this.state = { checked: [false, false, false], style: {} };
  } 

  toggleButtons(){
    console.log('gaor')
    if (this.props.setDistance == 600) {
      this.setState({ checked: [true, false, false] })
    }else if (this.props.setDistance == 8046) {
      console.log('8064');
      this.setState({ checked: [false, true, false] })
    }else if (this.props.setDistance == 32186) {
      this.setState({ checked: [false, false, true] }) 
    }else {
      this.setState({ checked: [false, false, false] })
    }
  }

  render () {
    return (
      <div className="search-index-div">
        <div className="twelve columns text-center">
          <div className="search-index-buttons twelve columns">
            <DistanceButton toggleButton={this.toggleButtons} onClick={() => this.toggleButtons} name="distance" id="Walking" {...DistanceButton} />
            <DistanceButton toggleButton={this.toggleButtons} onClick={() => this.toggleButtons} name="distance" id="5 Miles" {...DistanceButton} />
            <DistanceButton toggleButton={this.toggleButtons} onClick={() => this.toggleButtons} name="distance" id ="20 Miles" {...DistanceButton} />
          </div>
        </div>
      </div>
    )
  }
}
