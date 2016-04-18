require 'rails_helper'

RSpec.describe HomeController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "renders index template" do 
      get :index
      expect(response).to render_template(:index)
    end
  end

  describe "Search" do 
    before(:each) do 
      @params = {search: ["resaurant"],
                    price: "3",
                    distance: "8046",
                    lat: "40.760959400000004",
                    lng: "-111.8827771"}
    end

    it "searches for food" do
      
      get :search, @params, format: :json
      expect(response.status).to eq(200)
    end
  end

end
