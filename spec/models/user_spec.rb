require 'rails_helper'

RSpec.describe User, type: :model do
  describe '.from_omniauth' do 
    
  end
end


  # it 'returns only active users' do
  #   # setup
  #   active_user = create(:user, active: true)
  #   non_active_user = create(:user, active: false)

  #   # exercise
  #   result = User.active

  #   # verify
  #   expect(result).to eq [active_user]

  #   # teardown is handled for you by RSpec
