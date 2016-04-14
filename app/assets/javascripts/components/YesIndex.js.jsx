class YesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="selected-place text-center"><h1>Place Name</h1> 
        <hr/>
        <div className="google-map">
          <p>Insert google map image of yes selection</p>
        </div>
        <div className="place-information">
          <h4>Address: </h4>
          <h4>Phone: </h4>
          <h4>Web: </h4>
        </div>
        <div className="search-index-buttons">
         <button>Uber</button>
         <button>Directions</button>
         <button>Facebook</button>
        </div>
      </div>
    )
  }
}
