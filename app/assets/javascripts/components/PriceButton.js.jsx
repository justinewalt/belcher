class PriceButton extends React.Component {
  constructor(props){
    super(props);
    this.state = { style: {} };
  }

  render() {
    return (
      <button className={this.props.active ? 'active':''} onClick={() =>this.props.toggleButton(this.props.id)} style={this.state.style}>{this.props.id}</button>
    )
  }
}
