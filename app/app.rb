require 'sinatra/base'
require './data_mapper_setup.rb'

ENV["RACK_ENV"] ||= "development"

class App < Sinatra::Base
  get '/' do
    erb :'index'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
