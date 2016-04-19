class FoodButton extends React.Component {
  constructor(props){
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(){
    this.props.handleClick(this.props.name, !this.props.checked)
  }

  render() {
    let style; 
    if (this.props.checked) {
      style = {
        backgroundColor: '#33C3F0'      }
    }else{
      style = {
        backgroundColor: '#1c1c1c'
      }
    }
    return (
      <button onClick={this.toggleButton} style={style}>{this.props.name}</button>
    )
  }
}
