class HomeController < ApplicationController
  before_action :client
  def index
  end

  def search
    price = params["price"]
    distance = params["distance"].to_i
    lat = "40.7608".to_f
    long = "-111.8910".to_f
    search = params["search"]
    @spots = @client.spots(lat, long, :radius =>  distance, :name => search, :types => ['restaurant', 'food', 'meal_takeaway', 'meal_delivery', 'cafe', 'bakery'], :exclude => ['grocery_or_supermarket'] )
    render json: @spots
  end

  private

    def client
      @client = GooglePlaces::Client.new(ENV['API_KEY'])
    end
end
