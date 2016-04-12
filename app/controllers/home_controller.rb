class HomeController < ApplicationController
  before_action :client
  def index
  end

  def search
    binding.pry
    price = params["price"].to_i
    distance = params["distance"].to_i
    lat = "40.7608".to_f
    long = "-111.8910".to_f
    location = Geocoder.search("#{lat}, #{long}")
    origin = location.first.formatted_address
    search_params = params["search"]
    search_params = search.join(" ")
    spots = @client.spots(lat, long, :radius =>  distance, :name => search_params, :types => ['restaurant', 'food', 'meal_takeaway', 'meal_delivery', 'cafe', 'bakery'], :exclude => ['grocery_or_supermarket'] )
    filtered_spots = spots.reject { |spot| spot.price_level.to_i > price}
    render json: {filtered_spots: filtered_spots, origin: origin }
  end

  private

    def client
      @client = GooglePlaces::Client.new(ENV['API_KEY'])
    end
end
