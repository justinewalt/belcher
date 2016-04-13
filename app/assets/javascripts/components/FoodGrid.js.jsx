class FoodGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="twelve columns">
        <div className="food-button-input">
          <FoodButton handleClick={this.props.searchParams} name="American" />
          <FoodButton handleClick={this.props.searchParams} name="Chinese" />
          <FoodButton handleClick={this.props.searchParams} name="French" />
          <FoodButton handleClick={this.props.searchParams} name="German" />
          <FoodButton handleClick={this.props.searchParams} name="Italian" />
          <FoodButton handleClick={this.props.searchParams} name="Japanese" />
          <FoodButton handleClick={this.props.searchParams} name="Mexican" />
          <FoodButton handleClick={this.props.searchParams} name="Thai" />
          <FoodButton handleClick={this.props.searchParams} name="Vietnamese" /> 
        </div>
        <br/>
        <br/>
      </div>
    )
  }
}
