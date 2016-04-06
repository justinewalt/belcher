class HomeController < ApplicationController
  before_action :client
  def index
  end

  def search
    @search = ""
    @spotsSearch = @client.spots_by_query('@search')
  end

  private

  def client
    @client = GooglePlaces::Client.new(ENV['API_KEY'])
  end
end
