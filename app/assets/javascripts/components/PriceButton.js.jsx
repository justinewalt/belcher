class PriceButton extends React.Component {
  constructor(props){
    super(props);
    this.state = { style: {} };
    this.toggleButtons = this.toggleButtons.bind(this);
  }

  toggleButtons(){
    this.props.handleClick(this.props.name)
  }

  render() {
    return (
      <button className={this.props.active ? 'active':''} 
       onClick={() => this.props.handleClick(this.props.id, this.props.setPri)}
       style={this.state.style}>{this.props.id}</button>
    )
  }
}
