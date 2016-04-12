if Rails.env.development?
  begin 
    YAML.load(File.read('config/facebook_omniauth_creds.yml')).each do |key, value| ENV[key] = value
    end
  rescue
    raise "No facebook_omniauth_creds file found in config dir!"
  end
end