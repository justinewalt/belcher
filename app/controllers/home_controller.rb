class HomeController < ApplicationController
  before_action :client
  before_action :uber_client, only: [:uber_products, :uber_call]
  def index
  end

  def search
    price = params["price"].to_i
    distance = params["distance"].to_i
    if params["search"]
      search_params = params["search"].join("| ")
    else
      search_params = ""
    end
    @lat = params["lat"].to_f
    @long = params["lng"].to_f
    search_params = params["search"].join("| ")
    @origin = Geocoder.search("#{@lat}, #{@long}").first.formatted_address

    spots = @client.spots( @lat, @long, :radius =>  distance, :name => search_params,
                          :types => ['restaurant', 'meal_takeaway', 'meal_delivery', 'cafe', 'bakery', 'bar'],
                          :exclude => ['grocery_or_supermarket'] )
    spots = spots.reject { |spot| spot.price_level.to_i > price}
    filtered_spots = spots.reject { |spot| spot.opening_hours == false || spot.opening_hours == nil}
    render json: {filtered_spots: filtered_spots, origin: @origin}
  end

  def foodout
    flash[:notice] = "Oh, no! Out of choices, search again."
    redirect_to root_path
  end

  def noresults
    flash[:notice] = "No results in your search area, try again."
    redirect_to root_path
  end

  def recents
    name = params['name']
    address = params['address']
    rating = params['rating']
    price = params['price']
    picture = params['picture']

    if user_signed_in?
      recent = Recent.create({name: name, address: address, rating: rating, price: price , picture: picture, user_id: current_user.id})
    end
    render json: {}
  end

  def loader
    render text: 'loaderio-355452d93107d872484e0af1ad679c62'
  end
  # def uber_call
  #   lat = params["lat"]
  #   long = params["lng"]
  #   end_lat = params["resultLat"]
  #   end_long = params["resultLong"]
  #   product_id = params["productId"]
  #   binding.pry
  #   user = @uber_client.me
  #   binding.pry
  #   trip = @uber_client.trip_request(product_id: product_id, start_latitude: lat, start_longitude: long, end_latitude: end_lat, end_longitude: end_long)
  #   binding.pry
  # end
  #
  # def uber_products
  #   lat = params["lat"]
  #   long = params["lng"]
  #   end_lat = params["resultLat"]
  #   end_long = params["resultLong"]
  #
  #   products = @uber_client.products(latitude: lat, longitude: long)
  #   price = @uber_client.price_estimations(start_latitude: lat, start_longitude: long, end_latitude: end_lat, end_longitude: end_long)
  #   time = @uber_client.time_estimations(start_latitude: lat, start_longitude: long)
  #   render json:{products: products, time: time, price: price}
  # end

  private

    def client
      @client = GooglePlaces::Client.new(ENV['API_KEY'])
    end

    # def uber_client
    #   @uber_client = Uber::Client.new do |config|
    #     config.server_token  = ENV['SERVER_TOKEN']
    #     config.client_id     = ENV['CLIENT_ID']
    #     config.client_secret = ENV['CLIENT_SECRET']
    #   end
    # end
end
