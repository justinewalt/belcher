class FoodGrid extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div className="twelve columns">
        <div>
          <h3 className="text-center">Top Cuisines</h3>
        </div>
        <div className="food-button-input">
          <div>
            <CuisineButton handleClick={this.props.searchParams} name="American" />
            <CuisineButton handleClick={this.props.searchParams} name="Chinese" />
            <CuisineButton handleClick={this.props.searchParams} name="French" />
          </div>
          <div>
            <CuisineButton handleClick={this.props.searchParams} name="German" />
            <CuisineButton handleClick={this.props.searchParams} name="Italian" />
            <CuisineButton handleClick={this.props.searchParams} name="Japanese" />
          </div>
          <div>
            <CuisineButton handleClick={this.props.searchParams} name="Mexican" />
            <CuisineButton handleClick={this.props.searchParams} name="Thai" />
            <CuisineButton handleClick={this.props.searchParams} name="Vietnamese" />
          </div>
        </div>
      </div>
    )
  }
}
