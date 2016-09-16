ENV["RACK_ENV"] ||= "development"

require 'sinatra/base'
require './data_mapper_setup.rb'
require 'json'



class App < Sinatra::Base
  get '/' do
    erb :'index'
  end

  post '/temperature' do
    # get the temperature from js and send in new instance(row) to db
    Thermostat.create(temperature: params[:temperature], powermode: params[:powermode])
  end

  get '/temperature' do
    last_temp = Thermostat.last
    content_type :json
    {temperature2: last_temp.temperature, powermode2: last_temp.powermode}.to_json
  end


  # start the server if ruby file executed directly
  run! if app_file == $0
end
