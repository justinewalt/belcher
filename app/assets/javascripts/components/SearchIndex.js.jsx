class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: "", results: [], price: "3",
                 distance: "8046", searchValue: [],
                 toggleSearch: false, origin: "",
                 lat: 0.00, lng: 0.00, result: {},
                 yes: false, searched: false}

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
    this.autoComplete = this.autoComplete.bind(this);
    this.foodButtons = this.foodButtons.bind(this);
  }

//========================== SEARCH PARAMS ===============================
  searchParams(search, checked) {
    let searchValue = this.state.searchValue;
    if (searchValue[0] == "restaurant"){
      searchValue = []
    }
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
    let count = this.state.results.length
    let index = this.state.results.findIndex( v => v === this.state.result )
    if (count === 1) {
      window.location.assign('/foodout')
    } else {
    this.state.results.splice(index, 1)
    this.setState({result: this.state.results[Math.floor(Math.random()*this.state.results.length)]})
    }
  }

//======================== GET SPOTS (AJAX CALL)===========================
  getSpots(e) {
    e.preventDefault();
    if (this.refs.searchBar.value === "") {
      this.state.searchValue.push("restaurant");
    } else {
      this.state.searchValue.push(`${this.refs.searchBar.value}|`);
    }
    this.state.yes = false;
    $.ajax({
      url: '/search',
      type: 'GET',
      data: {search: this.state.searchValue,
            price: this.state.price,
            distance: this.state.distance,
            lat: this.state.lat,
            lng: this.state.lng}
    }).done(data => {
      if (data.filtered_spots.length == 0) {
        window.location.assign('/noresults');
      } else {
      this.setState({results: data.filtered_spots, search: "",
                    result: data.filtered_spots[Math.floor(Math.random()*data.filtered_spots.length)],
                    origin: data.origin, distance_to: data.distance_to, time_to: data.time_to, searched: true})
      }
    }).fail(data => {
      console.log("Search Error");
    });
  }

//============== Geolocation via html5 geolocator ===========================


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
    this.setState({lat: position.coords.latitude, lng: position.coords.longitude})
    this.stopWatch();
  }

  stopWatch() {
    if(watchId) {
      navigator.geolocation.clearWatch(watchId);
      watchId = null;
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

  foodButtons() {
    if(this.state.searched === false) {
      let findFood;
      if(this.state.lat){
        findFood = <div onClick={this.getSpots} className="find-food-button offset-by-four four columns">
                     <p>Find Me Food</p>
                   </div>
      }else {
        findFood = <div className="find-food-button find-food-button-disabled offset-by-four four columns">
                     <p>Loading Location...</p>
                   </div>
      }
      return(
        <div className="container">
        {findFood}
          <div className="twelve columns">
            <button className="popular-cuisines" type='button' onClick={() => this.setState({toggleSearch: !this.state.toggleSearch})}>Popular Cuisines</button>
            <br />
            <br />
            {this.searchFields()}
          </div>
          <PriceGrid setPrice={this.setPrice}/>
          <DistanceGrid setDistance={this.setDistance}/>
          <input className="search-index-input" type="text" placeholder="Food Type or Restaurant Name (Optional)" ref={"searchBar"} />
        </div>
      );
    }
  }

//============ toggles the search fields ======================
  searchFields() {
    if (this.state.toggleSearch) {
      return(
        <FoodGrid searchParams={this.searchParams} searchValue={this.state.searchValue}/>
      )
    }
  }

//======================= Script to run search Autocomplete via Google ========================
  autoComplete(){
    $.ajax({
      url: '/autocomplete',
      type: 'GET',
      data: {input: this.refs.searchBar.value}
    }).success(data => {
    }).error(data => {
    });
                // var places = new google.maps.place.Autocomplete(document.getElementById('#input-autocomplete'));
                // google.maps.event.addListener(places, 'place_changed', function() {
                //   var place = places.getPlace();
                //   var address = place.formatted_address;
                //   var latitude = place.geometry.location.lat();
                //   var longitude = place.geometry.location.lng();
                // });
  }

//======================= render of the page ========================
  render() {
    this.geoloc();
    return(
      <div className="search-index-div">
        <div className="twelve columns text-center">
          <ResultsPage results={this.state.results} result={this.state.result} newResult={this.newResult} clickYes={this.clickYes}/>
          <Yes result={this.state.result} yes={this.state.yes} lat={this.state.lat} lng={this.state.lng} />
          {this.foodButtons()}
        </div>
      </div>
    );
  }
}
