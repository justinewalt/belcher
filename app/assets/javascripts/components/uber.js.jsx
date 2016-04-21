// class Uber extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {choose: false, products: [], time: [], price: []}
//     this.chooseProduct = this.chooseProduct.bind(this);
//     this.getProduct = this.getProduct.bind(this);
//     this.showProduct = this.showProduct.bind(this);
//     this.hideProduct = this.hideProduct.bind(this);
//     this.uberCall = this.uberCall.bind(this);
//   }
//
//   hideProduct() {
//     this.setState({choose: !this.state.choose})
//   }
//
//   showProduct() {
//     if (this.state.choose == false) {
//       return (
//         <div className="ub">
//           <p className="fa fa-car" onClick={this.getProduct}></p>
//           <p>Ride there with Uber</p>
//         </div>
//       )
//     }else {
//       return (
//         <p className="fa fa-times-circle cancel-btn" onClick={this.hideProduct}></p>
//       )
//     }
//   }
//
//   uberCall(product) {
//     debugger
//     $.ajax({
//       url: '/uber_call',
//       type: 'GET',
//       data: {resultLat: this.props.resultLat, resultLong: this.props.resultLong, lat: this.props.lat, lng: this.props.lng, productId: product }
//     }).done (data => {
//       console.log(data)
//     });
//   }
//
//   getProduct() {
//     debugger
//       $.ajax({
//         url: '/uber_products',
//         type: 'GET',
//         data: {resultLat: this.props.resultLat, resultLong: this.props.resultLong, lat: this.props.lat, lng: this.props.lng }
//       }).done (data => {
//         debugger
//         this.setState({products: data.products, time: data.time, price: data.price, choose: !this.state.choose})
//       }).fail (data => {
//         console.log(data)
//       });
//
//   }
//
//   chooseProduct() {
//     if(this.state.choose == true) {
//       return (
//         <div>
//           <button onClick={() => this.uberCall(this.state.products[0].product_id)} className="six columns offset-by-three">{this.state.products[0].display_name} - {this.state.time[0].estimate / 60}min - {this.state.price[0].estimate}</button>
//           <button onClick={() => this.uberCall(this.state.products[1].product_id)} className="six columns offset-by-three">{this.state.products[1].display_name} - {this.state.time[1].estimate / 60}min - {this.state.price[1].estimate}</button>
//           <button onClick={() => this.uberCall(this.state.products[2].product_id)} className="six columns offset-by-three">{this.state.products[2].display_name} - {this.state.time[2].estimate / 60}min - {this.state.price[2].estimate}</button>
//           <button onClick={() => this.uberCall(this.state.products[3].product_id)} className="six columns offset-by-three">{this.state.products[3].display_name} - {this.state.time[3].estimate / 60}min - {this.state.price[3].estimate}</button>
//           <button onClick={() => this.uberCall(this.state.products[4].product_id)} className="six columns offset-by-three">{this.state.products[4].display_name} - {this.state.time[4].estimate / 60}min - {this.state.price[4].estimate}</button>
//         </div>
//       )
//     }
//   }
//
//   render() {
//     return(
//       <div>
//         {this.showProduct()}
//         {this.chooseProduct()}
//       </div>
//     );
//   }
// }
