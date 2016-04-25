
class Yes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.yes === true) {
      let price = ""
      if (this.props.result.price_level == 1) {
        price = "Price: $"
      }else if (this.props.result.price_level == 2) {
        price = "Price: $$"
      }else if(this.props.result.price_level == 3) {
        price = "Price: $$$"
      }else {
        price = ""
      };
      let url = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.result.lat},${this.props.result.lng}&zoom=17&size=250x250&markers=color:red|${this.props.result.lat},${this.props.result.lng}&maptype=roadmap&key=AIzaSyDjH86rcfIoaXzluTnahrfvvnLxU0920vU`
      let href = `http://maps.google.com/?q=${this.props.result.name}+${this.props.result.vicinity}`
      
      return(
        <div className="text-center">
          <h1 className="result-name">{this.props.result.name}</h1>
          <p className="price-rating">{price}<span className="price-rating-span"> </span>Rating: {this.props.result.rating} </p>
          <p className="map-div-text">{this.props.result.vicinity}</p>
          <img src={url} className="map_frame"></img>
          <a href={href} target="_blank">
            <div>
              <i className="fa fa-chevron-circle-right"></i>
              <p className="direction-text">Get Directions</p>
            </div>
          </a>
        </div>
      );
    }else {
      return(
        <div></div>
      )

    }
  }
}
