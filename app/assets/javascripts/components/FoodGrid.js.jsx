class FoodGrid extends React.Component {
  constructor(props) {
    super(props);
  }
  checked(name) {
    if(this.props.searchValue.indexOf(name) != -1){
      return(true);
    }else{
      return(false);
    }
  }
  render () {
    return (
      <div className="twelve columns">
        <div className="food-button-input search-index-buttons">
          <FoodButton handleClick={this.props.searchParams} 
                      searchValue={this.props.searchValue}
                      checked={this.checked("American")} 
                      name="American" />
          <FoodButton handleClick={this.props.searchParams} 
                      searchValue={this.props.searchValue}
                      checked={this.checked("Bar")} 
                      name="Cocktails" />
          <FoodButton handleClick={this.props.searchParams} 
                      searchValue={this.props.searchValue}
                      checked={this.checked("Chinese")} 
                      name="Chinese" />
          <FoodButton handleClick={this.props.searchParams} 
                      searchValue={this.props.searchValue}
                      checked={this.checked("French")} 
                      name="French" />
          <FoodButton handleClick={this.props.searchParams} 
                      searchValue={this.props.searchValue}
                      checked={this.checked("German")} 
                      name="German" />
          <FoodButton handleClick={this.props.searchParams} 
                      searchValue={this.props.searchValue}
                      checked={this.checked("Italian")} 
                      name="Italian" />
          <FoodButton handleClick={this.props.searchParams} 
                      searchValue={this.props.searchValue}
                      checked={this.checked("Japanese")} 
                      name="Japanese" />
          <FoodButton handleClick={this.props.searchParams} 
                      searchValue={this.props.searchValue}
                      checked={this.checked("Mexican")} 
                      name="Mexican" / >
          <FoodButton handleClick={this.props.searchParams} 
                      searchValue={this.props.searchValue}
                      checked={this.checked("Seafood")} 
                      name="Seafood" />
          <FoodButton handleClick={this.props.searchParams} 
                      searchValue={this.props.searchValue}
                      checked={this.checked("Spanish")} 
                      name="Spanish" />
          <FoodButton handleClick={this.props.searchParams} 
                      searchValue={this.props.searchValue}
                      checked={this.checked("Thai")} 
                      name="Thai" />
          <FoodButton handleClick={this.props.searchParams} 
                      searchValue={this.props.searchValue}
                      checked={this.checked("Vietnamese")} 
                      name="Viet" />
        </div>
        <br/>
        <br/>
      </div>
    )
  }
}
