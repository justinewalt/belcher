class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: "", results: [], price: "3",
                 distance: "1609.34", searchValue: [],
                 toggleSearch: false, origin: "",
                 lat: 0.00, long: 0.00}

    this.setPrice = this.setPrice.bind(this);
    this.setDistance = this.setDistance.bind(this);
    this.searchFields = this.searchFields.bind(this);
    this.getSpots = this.getSpots.bind(this);
    this.searchParams = this.searchParams.bind(this);
    this.geoloc = this.geoloc.bind(this);
    this.stopWatch = this.stopWatch.bind(this);
    this.success = this.success.bind(this);
  }

//========================== SEARCH PARAMS ===============================
  searchParams(search, checked) {
    let searchValue = this.state.searchValue;
    if (checked) {
      searchValue.push(search)
    }else {
      let index = searchValue.findIndex( v => v === search )
      searchValue.splice(index, 1)
    }
    this.setState({ searchValue: searchValue });
  }

//======================== GET SPOTS (AJAX CALL)===========================
  getSpots(e) {
    e.preventDefault();
    if (this.refs.searchBar.value != "") {
      this.state.searchValue.push (`${this.refs.searchBar.value}|`)
    }

    $.ajax({
      url: '/search',
      type: 'GET',
      data: {search: this.state.searchValue,
            price: this.state.price,
            distance: this.state.distance,
            lat: this.state.lat,
            lng: this.state.lng}
    }).done(data => {
      this.setState({results: data.filtered_spots, search: "",
                    result: data.filtered_spots[Math.floor(Math.random()*data.filtered_spots.length)],
                    origin: data.origin, rating: data.rating, icon: data.icon})
    }).fail(data => {
      console.log(data)
    });
  }


  //=========== GeoLocation Code Starts Here ==============
    geoloc() {
    let watchId = null;
      if (navigator.geolocation) {
        let optn = {
          enableHighAccuracy : true,
          timeout : Infinity,
          maximumAge : 0
        }
        watchId = navigator.geolocation.watchPosition(this.success,()=>{},optn);
      } else {
          alert('Geolocation is not supported in your browser');
      }

    }

    success(position) {
      this.state.lat = position.coords.latitude
      this.state.lng = position.coords.longitude
      this.stopWatch();
    }

    stopWatch() {
      if(watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
      }
    }
  //============= GeoLocation Code Ends Here ================


// =========================== RESULTS =================================
  results() {
    if(this.state.results.length != 0){
      let url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBblRBZp_9JKVUeK-HKRcW4_EY160-CmeU&origin=${this.state.origin}&destination=${this.state.result.vicinity}`
      let price = this.state.result.price_level
      if (price == 3) {
        price = 'Price: $$$'
      }else if (price == 2) {
        price = 'Price: $$'
      }else if (price == 1) {
        price = 'Price: $'
      };

      return(
        <div className="text-center">
          <h1>{this.state.result.name}</h1>
          <iframe
            width="650"
            height="500"
            frameBorder="0"
            src={url} allowFullScreen>
          </iframe>

          <h4>Address: {this.state.result.vicinity}</h4>
          <h4>{price}</h4>
          <h4>Rating: {this.state.result.rating}</h4>

        </div>
      );
    }
  }

//============== sets the price ===========================
  setPrice(e) {
    let value = e.target.value;
    this.setState({price: value});
  }
//============== sets the distance =========================
  setDistance(e) {
    let value = e.target.value;
    this.setState({distance: value});
  }

//============ toggles the search fields ======================
  searchFields() {
    if (this.state.toggleSearch)
      return(
        <FoodGrid searchParams={this.searchParams}/>
      )
  }

//======================= render of the page ========================
  render() {
    this.geoloc();
    return(
      <div className="search-index-div">
        <div className="twelve columns text-center">
          <div onClick={this.getSpots} className="find-food-button offset-by-four four columns">
            <p>Find Me Food</p>
          </div>
          <div className="twelve columns">
            <button type='button' onClick={() => this.setState({toggleSearch: !this.state.toggleSearch})}>Popular Cuisines</button>
            <br />
            <br />
            {this.searchFields()}
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
          <input className="search-index-input" type="text" placeholder="Food Type or Restaurant Name (Optional)" ref={"searchBar"} />

        </div>
        {this.results()}
      </div>
    );
  }
}
