class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.recentsPush = this.recentsPush.bind(this);
  }

  recentsPush(price, url) {
    $.ajax({
      url: '/recents',
      type: 'PUT',
      data: {name: this.props.result.name, address: this.props.result.vicinity,
            rating: this.props.result.rating, price: price, picture: url }
    }).done(data => {
      console.log(data)
    }).fail(data => {
      console.log(data)
    });
    this.props.clickYes();
  }

  render() {
    if(this.props.results.length != 0) {
      if (this.props.result.photos[0] !== undefined ) {
        url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.result.photos[0].photo_reference}&key=AIzaSyBblRBZp_9JKVUeK-HKRcW4_EY160-CmeU`
      }else {
        url = 'http://i.imgur.com/VsD1hGj.png';
      }

      let price = this.props.result.price_level
      if (price == 3) {
        price = 'Price: $$$'
      }else if (price == 2) {
        price = 'Price: $$'
      }else if (price == 1) {
        price = 'Price: $'
      }else {
        price = 'No Price Available'
      };

      return(
        <div className="text-center">
          <h1>{this.props.result.name}</h1>
          <img className="result_image" src={url} />
          <p className="map-div-text">{this.props.result.vicinity}</p>
          <p className="map-div-text">{price} - Rating: {this.props.result.rating} </p>
          <br />
          <p className="map-div-text">Would you like to eat here?</p>
          <p className="fa fa-times-circle no-class" onClick={this.props.newResult}></p>
          <p className="fa fa-check-circle" onClick={() => this.recentsPush(price, url)}></p>
        </div>
      );
    }else {
      return(
        <div></div>
      );
    }
  }

}
