class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
    let url = ""
  }

  render() {
    if(this.props.results.length != 0){
      if (this.props.result.photos[0].photo_reference) {
        url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.result.photos[0].photo_reference}&key=AIzaSyBblRBZp_9JKVUeK-HKRcW4_EY160-CmeU`
      }else {
        url = "/assets/images/circle.png"
      }
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

          <img className="result_image" src={url} />
          <p>Would you like to eat here?</p>
          <br />
          <br />
          <button onClick={this.props.newResult}>No</button>
          <button onClick={this.props.clickYes}>Yes</button>
        </div>
      );
    }else {
      return(
        <div></div>
      );
    }
  }

}
