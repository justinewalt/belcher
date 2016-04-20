class DistanceButton extends React.Component {
  constructor(props) {
    super(props);
    // this.toggleButton = this.toggleButton.bind(this);
    this.state = { style: {} };
  }

  // toggleButton(){
  //   let style = {
  //     backgroundColor: '#33C3F0',
  //     color: 'white'
  //   }
  //   this.props.handleClick(this.props.name)
  //   this.setState({ style: style });  
  // }

  render() {
    return (
      <button onClick={this.props.toggleButton} style={this.state.style}>{this.props.id}</button>
    )
  }
}