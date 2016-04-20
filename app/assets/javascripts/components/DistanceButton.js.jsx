class DistanceButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
    this.state = { checked: false, style: {} };
  }

  toggleButton(){
    let select = !this.state.checked; 
    let style = {};
    if (select) {
      style = { 
        color: '#c99c14'
      }
    }
    this.props.handleClick(this.props.name)
    this.setState({ checked: select, style: style });
  }

  render() {
    return (
      <button onClick={this.toggleButton} style={this.state.style}>{this.props.id}</button>
    )
  }
}