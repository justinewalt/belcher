class DistanceGrid extends React.Component {
  constructor(props) {
    super(props);
    this.toggleButtons = this.toggleButtons.bind(this);
    this.state = { checked: [false, true, false], style: {} };
  } 

  toggleButtons( id, distance ){
    if (id === "Walking") {
      this.setState({ checked: [true, false, false] })
    }else if (id === "5 Miles") {
      this.setState({ checked: [false, true, false] })
    }else if (id === "20 Miles" ) {
      this.setState({ checked: [false, false, true] }) 
    }else {
      this.setState({ checked: [false, false, false] })
    }
    this.props.setDistance(distance)
  }

  render () {
    return (
      <div className="search-index-div">
        <div className="twelve columns text-center">
          <div className="search-index-buttons twelve columns">
            <DistanceButton active={this.state.checked[0]} handleClick={this.toggleButtons} name="distance" id="Walking" dist={600} />
            <DistanceButton active={this.state.checked[1]} handleClick={this.toggleButtons} name="distance" id="5 Miles" dist={8046} />
            <DistanceButton active={this.state.checked[2]} handleClick={this.toggleButtons} name="distance" id ="20 Miles" dist={32186} />
          </div>
        </div>
      </div>
    )
  }
}
