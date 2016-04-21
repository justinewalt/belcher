if Rails.env.development?
  uber = "#{Rails.root}/config/uber.yml"
  if File.exists? uber
    config = YAML.load_file(uber)
    config.each { |key, value| ENV[key] || ENV[key] = value.to_s }
  else
    raise "Missing file uber.yml"
  end
end
