class FoodGrid extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div className="twelve columns">
        <div className="food-button-input">
          <CuisineButton handleClick={this.props.searchParams} name="American" />
          <CuisineButton handleClick={this.props.searchParams} name="Chinese" />
          <CuisineButton handleClick={this.props.searchParams} name="French" />
          <CuisineButton handleClick={this.props.searchParams} name="German" />
          <CuisineButton handleClick={this.props.searchParams} name="Italian" />
          <CuisineButton handleClick={this.props.searchParams} name="Japanese" />
          <CuisineButton handleClick={this.props.searchParams} name="Mexican" />
          <CuisineButton handleClick={this.props.searchParams} name="Thai" />
          <CuisineButton handleClick={this.props.searchParams} name="Vietnamese" /> 
        </div>
      </div>
    )
  }
}
