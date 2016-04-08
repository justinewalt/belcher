class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="search-index-div">
        <div className="twelve columns text-center">
          <div className="find-food-button offset-by-four four columns">
            <p>Find Me Food</p>
          </div>
          <div className="twelve columns">
            <input className="search-index-input" type="text" placeholder="Food Type or Restaurant Name (Optional)" />
          </div>
          <div className="search-index-buttons price-button twelve columns">
            <button>$</button>
            <button>$$</button>
            <button>$$$</button>
          </div>
          <div className="search-index-buttons distance-button twelve columns">
            <button>Walking</button>
            <button>5 Miles</button>
            <button>10 Miles</button>
          </div>
        </div>
      </div>
    );
  }
}