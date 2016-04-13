class DistanceGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="search-index-div">
        <div className="twelve columns text-center">
          <div className="search-index-buttons twelve columns">
            <DistanceButton handleClick={() => this.props.setDistance(1609)} name="distance" id="Walking"/>
            <DistanceButton handleClick={() => this.props.setDistance(8046)} name="distance" id="5 Miles"/>
            <DistanceButton handleClick={() => this.props.setDistance(32186)} name="distance" id ="20 Miles"/>
          </div>
        </div>
      </div>
    )
  }
}