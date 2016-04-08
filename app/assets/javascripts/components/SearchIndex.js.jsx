class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="search-index-div">
        <div className="twelve columns text-center">
          <div className="find-food-button offset-by-five two columns">
            <p className="text-center">Find Me Food</p>
          </div>
          <div className="search-index-buttons twelve columns">
            <button>$</button>
            <button>$$</button>
            <button>$$$</button>
            <button>$$$$</button>
            <button>Walking</button>
            <button>5 Miles</button>
            <button>10 Miles</button>
            <button>20 Miles</button>
          </div>
        </div>
      </div>
    );
  }
}