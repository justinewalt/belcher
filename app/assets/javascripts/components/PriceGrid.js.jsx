class PriceGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="search-index-div">
        <div className="twelve columns text-center">
          <div className="search-index-buttons twelve columns">
            <PriceButton handleClick={() => this.props.setPrice(1)} name="price" id="$"/>
            <PriceButton handleClick={() => this.props.setPrice(2)} name="price" id="$$"/>
            <PriceButton handleClick={() => this.props.setPrice(3)} name="price" id="$$$"/>
          </div>
        </div>
      </div>
    )
  }
}