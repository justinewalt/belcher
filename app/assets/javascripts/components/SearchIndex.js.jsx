class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: "", results: [], price: "3", distance: "1609.34", searchValue: "", toggleSearch: false, origin: ""}
    this.setPrice = this.setPrice.bind(this);
    this.setDistance = this.setDistance.bind(this);
    this.searchFields = this.searchFields.bind(this);
    this.getSpots = this.getSpots.bind(this);
    this.searchParams = this.searchParams.bind(this);
  }

  searchParams(s) {
    this.state.searchValue += `${s}|`
  }


  getSpots(e) {
    e.preventDefault();
    $.ajax({
      url: '/search',
      type: 'GET',
      data: {search: this.state.searchValue, price: this.state.price, distance: this.state.distance}
    }).done(data => {
      this.setState({results: data.filtered_spots, search: "", result: data.filtered_spots[Math.floor(Math.random()*data.filtered_spots.length)], origin: data.origin})
    }).fail(data => {
      console.log(data)
    });

  }



  results() {
    if(this.state.results.length != 0){
      let url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBblRBZp_9JKVUeK-HKRcW4_EY160-CmeU&origin=${this.state.origin}&destination=${this.state.result.vicinity}`
      return(
        <div className="text-center">
          <h1>Name: {this.state.result.name}</h1>
          <iframe
            width="650"
            height="500"
            frameBorder="0"
            src={url} allowFullScreen>
          </iframe>

          <h4>Address: {this.state.result.vicinity}</h4>
          <h4>Price: {this.state.result.price_level}</h4>
        </div>
      );
    }
  }

  setPrice(e) {
    let value = e.target.value;
    this.setState({price: value});
  }

  setDistance(e) {
    let value = e.target.value;
    this.setState({distance: value});
  }

  searchFields() {
    if (this.state.toggleSearch)
      return(
        <FoodGrid searchParams={this.searchParams}/>
      )
  }

  render() {
    return(
      <div className="search-index-div">
        <div className="twelve columns text-center">
          <div className="find-food-button offset-by-four four columns">
            <p onClick={this.getSpots}>Find Me Food</p>
          </div>
          <div className="twelve columns">

            <button type='button' onClick={() => this.setState({toggleSearch: !this.state.toggleSearch})}>Add Cuisine</button>
            <form onSubmit={() => this.searchParams(this.refs.searchBar.value)}>
              <input className="search-index-input" type="text" placeholder="Food Type or Restaurant Name (Optional)" ref={"searchBar"}  />
              <button type="submit">Submit</button>
            </form>

            {this.searchFields()}
            <hr />
          </div>
          <div className="search-index-buttons price-button twelve columns">
            <button name="price" onClick={this.setPrice} value="1" >$</button>
            <button name="price" onClick={this.setPrice} value="2">$$</button>
            <button name="price" onClick={this.setPrice} value="3">$$$</button>
          </div>
          <div className="search-index-buttons distance-button twelve columns">
            <button name="distance" value="1609.34" onClick={this.setDistance}>Walking</button>
            <button name="distance" value="8046.72" onClick={this.setDistance}>5 Miles</button>
            <button name="distance" value="32186.9" onClick={this.setDistance}>20 Miles</button>
          </div>

        </div>
        {this.results()}
      </div>
    );
  }
}
