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

  describe "No Results" do 
    it "Gets no results from search" do 
      get :noresults
      expect(response).to redirect_to(root_path)
    end
  end

  describe "Gone through all results" do 
    it "redirects when out of options" do 
      get :foodout
      expect(response).to redirect_to(root_path)
    end
  end

  describe "Loader IO" do 
    it "renders text for loader io" do 
      get :loader
      expect(response.status).to eq(200) 
    end
  end

  describe "Recents" do 
    before(:each) do 
    @params = {name: 'name', address: 'address', rating: 'rating', price: 'price' , picture: 'picture', user_id: 2}
    end
    it "Gets recents for users" do
      get :recents, @params, format: :json
      expect(response.status).to eq(200)
    end
  end

end
