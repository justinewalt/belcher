begin
 mail = "#{Rails.root}/config/contact.yml"
 YAML.load_file(mail).each do |key, value|
   ENV[key] = value
 end
rescue
 raise "No contact.yml config file in your config directory."
end