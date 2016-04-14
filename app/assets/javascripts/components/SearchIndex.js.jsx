class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: "cafe", results: [], price: "3",
                 distance: "1609.34", searchValue: [],
                 toggleSearch: false, origin: "",
                 lat: 0.00, long: 0.00, result: {}, yes: false}

    this.setPrice = this.setPrice.bind(this);
    this.setDistance = this.setDistance.bind(this);
    this.searchFields = this.searchFields.bind(this);
    this.getSpots = this.getSpots.bind(this);
    this.searchParams = this.searchParams.bind(this);
    this.geoloc = this.geoloc.bind(this);
    this.stopWatch = this.stopWatch.bind(this);
    this.success = this.success.bind(this);
    this.newResult = this.newResult.bind(this);
    this.clickYes = this.clickYes.bind(this);
    let watchId = null;

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
//===== what happens when clicking yes ==================
  clickYes() {
    this.setState({results: [], yes: true})
  }

//============== what happens when you click no ===============
  newResult() {
    let index = this.state.results.findIndex( v => v === this.state.result )
    this.state.results.splice(index, 1)
    this.setState({result: this.state.results[Math.floor(Math.random()*this.state.results.length)]})
  }

//======================== GET SPOTS (AJAX CALL)===========================
  getSpots(e) {
    e.preventDefault();
    console.log(this.refs.searchBar.value);
    if (this.refs.searchBar.value != "") {
      this.state.searchValue.push (`${this.refs.searchBar.value}|`);
      this.refs.searchBar.value = "";
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
                    origin: data.origin, distance_to: data.distance_to, time_to: data.time_to})
    }).fail(data => {
      console.log(data)
    });
  }

  geoloc() {
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



// =========================== RESULTS =================================
  results() {
    if(this.state.results.length != 0){
      let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBblRBZp_9JKVUeK-HKRcW4_EY160-CmeU&q=place_id:${this.state.result.place_id}`
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
            className="map_frame"
            width="650"
            height="500"
            frameBorder="0"
            src={url} allowFullScreen>
          </iframe>
          <h1>{this.state.result.type}</h1>
        </div>
      );
    }
  }

//============== sets the price ===========================
  setPrice(value) {
    this.setState({price: value});
  }
//============== sets the distance =========================
  setDistance(value) {
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
    debugger
    return(
      <div className="search-index-div">
        <div className="twelve columns text-center">
          <ResultsPage results={this.state.results} result={this.state.result} newResult={this.newResult} clickYes={this.clickYes}/>
          <Yes result={this.state.result} yes={this.state.yes} />

          <div onClick={this.getSpots} className="find-food-button offset-by-four four columns">
            <p>Find Me Food</p>
          </div>
          <div className="twelve columns">
            <button type='button' onClick={() => this.setState({toggleSearch: !this.state.toggleSearch})}>Popular Cuisines</button>
            <br />
            <br />
            {this.searchFields()}
          </div>
          <PriceGrid setPrice={this.setPrice}/>
          <DistanceGrid setDistance={this.setDistance}/>
          <input className="search-index-input" type="text" placeholder="Food Type or Restaurant Name (Optional)" ref={"searchBar"} />
        </div>
      </div>
    );
  }
}
