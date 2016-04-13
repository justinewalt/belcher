class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.results.length != 0){
      let url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBblRBZp_9JKVUeK-HKRcW4_EY160-CmeU&origin=${this.props.origin}&destination=${this.props.result.vicinity}`
      let price = this.props.result.price_level
      if (price == 3) {
        price = 'Price: $$$'
      }else if (price == 2) {
        price = 'Price: $$'
      }else if (price == 1) {
        price = 'Price: $'
      };
      return(
        <div className="text-center">
          <h1>{this.props.result.name}</h1>
          <iframe
            width="650"
            height="500"
            frameBorder="0"
            src={url} allowFullScreen>
          </iframe>

          <h4>Address: {this.props.result.vicinity}</h4>
          <h4>{price}</h4>
          <h4>Rating: {this.props.result.rating}</h4>
        </div>
      );
    } else {
      return(
        <div></div>
      )
    }
  }
}
