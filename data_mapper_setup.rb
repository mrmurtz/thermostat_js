require 'data_mapper'
require 'dm-postgres-adapter'

# later you'll need to require the models that are using DM to connect to your DB
require_relative 'app/models/thermostat.rb'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/thermostat_#{ENV['RACK_ENV']}")
DataMapper::Logger.new($stdout, :debug)
DataMapper.finalize
DataMapper.auto_upgrade!
