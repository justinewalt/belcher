class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
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
          <h1 className="result-name">{this.props.result.name}</h1>
          <p className="map-div-text">{this.props.result.vicinity}</p>
          <img className="result_image" src={url} />
          <p className="price-rating">{price}<span className="price-rating-span"> </span>Rating: {this.props.result.rating} </p>
          <br />
          <p className="eat-here">Eat here?</p>
          <p className="fa fa-times-circle result-button" onClick={this.props.newResult}></p>
          <p className="fa fa-check-circle result-button" onClick={this.props.clickYes}></p>
        </div>
      );
    }else {
      return(
        <div></div>
      )
    }
  }

}
