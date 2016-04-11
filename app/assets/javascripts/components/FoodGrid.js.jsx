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
            <button>American</button>
            <button>Chinese</button>
            <button>French</button>
          </div>
          <div className="twelve columns">
            <button>German</button>
            <button>Italian</button>
            <button>Japanese</button>
          </div>
          <div className="twelve columns">
            <button>Mexican</button>
            <button>Thai</button>
            <button>Vietnamese</button>
          </div>
        </div>
      </div>
    )
  }
}