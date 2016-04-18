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
      let url = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.result.lat},${this.props.result.lng}&zoom=17&size=600x600&markers=color:red|${this.props.result.lat},${this.props.result.lng}&maptype=roadmap&key=AIzaSyBblRBZp_9JKVUeK-HKRcW4_EY160-CmeU`
      let href = `http://maps.google.com/?q=${this.props.result.name}+${this.props.result.vicinity}`
      return(
        <div className="text-center">
          <h1>{this.props.result.name}</h1>
          <img src={url} className="map_frame"></img>
          <div className="map-div ">
            <div className="offset-by-three two columns left-div">
              <p className="direction-text">Get Directions</p>
              <a className="fa fa-chevron-circle-right" href={href} target="_blank"></a>
            </div>
            <div className="two columns mid-div">
              <p className="map-div-text">{this.props.result.vicinity}</p>
            </div>
            <div className="three columns right-div">
              <p className="map-div-text2">{price}</p>
              <p className="map-div-text2">Rating: {this.props.result.rating}</p>
            </div>
          </div>
        </div>
      );
    }else {
      return(
        <div></div>
      )

    }
  }
}
