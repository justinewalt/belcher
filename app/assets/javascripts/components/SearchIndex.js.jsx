class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: "", results: [], price: "1", distance: "1609.34", searchValue: "", toggleSearch: false}
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
      this.setState({results: data, search: "", result: data[Math.floor(Math.random()*data.length)]})
    }).fail(data => {
      console.log(data)
    });

  }



  results() {
    if(this.state.results.length != 0){
      debugger
      return(
        <div>
          <h1>Name: {this.state.result.name}</h1>
          <h3>Address: {this.state.result.vicinity}</h3>
          <h3>Price: {this.state.result.price_level}</h3>
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
            <input className="search-index-input" type="text" placeholder="Food Type or Restaurant Name (Optional)" ref={"searchBar"} onChange={() => this.searchParams(this.refs.searchBar.value)} />
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
