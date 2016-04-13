class HomeController < ApplicationController
  before_action :client
  def index
  end

  def search
    price = params["price"].to_i
    distance = params["distance"].to_i
    lat = params["lat"].to_f
    long = params["lng"].to_f
    origin = Geocoder.search("#{lat}, #{long}").first.formatted_address
    search_params = params["search"].join(" ")
    spots = @client.spots(lat, long, :radius =>  distance, :name => search_params,
                          :types => ['restaurant', 'food', 'meal_takeaway', 'meal_delivery', 'cafe', 'bakery'],
                          :exclude => ['grocery_or_supermarket'] )
    binding.pry                      
    spots = spots.reject { |spot| spot.price_level.to_i > price}
    filtered_spots = spots.reject { |spot| spot.opening_hours == false}
    render json: {filtered_spots: filtered_spots, origin: origin}
  end

  private

    def client
      @client = GooglePlaces::Client.new(ENV['API_KEY'])
    end
end
