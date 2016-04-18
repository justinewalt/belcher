class HomeController < ApplicationController
  before_action :client
  def index
  end

  def search
    price = params["price"].to_i
    distance = params["distance"].to_i
    lat = params["lat"].to_f
    long = params["lng"].to_f
    if params["search"]
      search_params = params["search"].join("| ")
    else
      search_params = ""
    end
    @origin = Geocoder.search("#{lat}, #{long}").first.formatted_address

    spots = @client.spots( lat, long, :radius =>  distance, :name => search_params,
                          :types => ['restaurant', 'meal_takeaway', 'meal_delivery', 'cafe', 'bakery', 'bar'],
                          :exclude => ['grocery_or_supermarket'] )
    spots = spots.reject { |spot| spot.price_level.to_i > price}
    filtered_spots = spots.reject { |spot| spot.opening_hours == false || spot.opening_hours == nil}
    render json: {filtered_spots: filtered_spots, origin: @origin}
  end

  def autocomplete
    @results = @client.spots_by_query(params[:input])
    render json: @results
  end

  private

    def client
      @client = GooglePlaces::Client.new(ENV['API_KEY'])
    end
end
