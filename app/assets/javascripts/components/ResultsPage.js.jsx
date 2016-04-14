class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.results.length != 0){
      let url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.result.photos[0].photo_reference}&key=AIzaSyBblRBZp_9JKVUeK-HKRcW4_EY160-CmeU`
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

          <img src={url} />
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
