class FoodGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="twelve columns">
        <hr />
        <div>
          <h3 className="text-center">Preferences</h3>
        </div>
        <div className="food-button-input offset-by-three six columns">
          <div className="twelve columns">
            <button onClick={() => this.props.searchParams("american")}>American</button>
            <button onClick={() => this.props.searchParams("chinese")}>Chinese</button>
            <button onClick={() => this.props.searchParams("french")}>French</button>
          </div>
          <div className="twelve columns">
            <button onClick={() => this.props.searchParams("german")}>German</button>
            <button onClick={() => this.props.searchParams("italian")}>Italian</button>
            <button onClick={() => this.props.searchParams("japanese")}>Japanese</button>
          </div>
          <div className="twelve columns">
            <button onClick={() => this.props.searchParams("mexican")}>Mexican</button>
            <button onClick={() => this.props.searchParams("thai")}>Thai</button>
            <button onClick={() => this.props.searchParams("vietnamese")}>Vietnamese</button>
          </div>
        </div>
      </div>
    )
  }
}
