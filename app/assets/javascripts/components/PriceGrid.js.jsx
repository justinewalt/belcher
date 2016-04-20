class PriceGrid extends React.Component {
  constructor(props) {
    super(props);
    this.toggleButtons = this.toggleButtons.bind(this);
    this.state = { checked: [false, false, true], style: {} };
  }

  toggleButtons( id ){
    if (id === "$") {
      this.setState({ checked: [true, false, false] })
    }else if (id === "$$") {
      this.setState({ checked: [false, true, false] })
    }else if (id === "$$$" ) {
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
            <PriceButton active={this.state.checked[0]} toggleButton={this.toggleButtons} handleClick={() => this.props.setPrice(1)} name="price" id="$"/>
            <PriceButton active={this.state.checked[1]} toggleButton={this.toggleButtons} handleClick={() => this.props.setPrice(2)} name="price" id="$$"/>
            <PriceButton active={this.state.checked[2]} toggleButton={this.toggleButtons} handleClick={() => this.props.setPrice(3)} name="price" id="$$$"/>
          </div>
        </div>
      </div>
    )
  }
}
