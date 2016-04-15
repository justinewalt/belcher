class Yes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.yes === true) {
      let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBblRBZp_9JKVUeK-HKRcW4_EY160-CmeU&q=place_id:${this.props.result.place_id}`
      return(
        <div className="text-center">
          <h1>{this.props.result.name}</h1>
          <iframe
            className="map_frame"
            width="650"
            height="500"
            frameBorder="0"
            src={url} allowFullScreen>
          </iframe>
          <p>ohhhhh yeah!!</p>
        </div>
      );
    }else {
      return(
        <div></div>
      )

    }
  }
}
