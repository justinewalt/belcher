class PriceGrid extends React.Component {
  constructor(props) {
    super(props);
    this.toggleButtons = this.toggleButtons.bind(this);
    this.state = { checked: [false, false, true], style: {} };
  }

  toggleButtons( id, price ){
    if (id === "$") {
      this.setState({ checked: [true, false, false] })
    }else if (id === "$$") {
      this.setState({ checked: [false, true, false] })
    }else if (id === "$$$" ) {
      this.setState({ checked: [false, false, true] }) 
    }else {
      this.setState({ checked: [false, false, false] })
    }
    this.props.setPrice(price)
  }

  render () {
    return (
      <div className="search-index-div">
        <div className="twelve columns text-center">
          <div className="search-index-buttons twelve columns">
            <PriceButton active={this.state.checked[0]} handleClick={this.toggleButtons} name="price" id="$" setPri="1" />
            <PriceButton active={this.state.checked[1]} handleClick={this.toggleButtons} name="price" id="$$" setPri="2"/>
            <PriceButton active={this.state.checked[2]} handleClick={this.toggleButtons} name="price" id="$$$" setPri="3"/>
          </div>
        </div>
      </div>
    )
  }
}
