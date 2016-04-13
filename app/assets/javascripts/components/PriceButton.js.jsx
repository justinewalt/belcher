class PriceButton extends React.Component {
  constructor(props){
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
    this.state = { checked: false, style: {} };
  }

  toggleButton(){
    let select = !this.state.checked;
    let style = {};
    if (select) {
      style = {
        backgroundColor: '#33C3F0',
        color: 'white'
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