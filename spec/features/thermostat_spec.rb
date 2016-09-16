require 'spec_helper'

feature "Thermostat" do
  scenario "we can see the Thermostat" do
    visit("/")
    expect(page).to have_content "Current temperature"
  end

  scenario "clicking the '-' button will add a row to the db with temperature" do
    visit('/')
    expect{click_button('-')}.to change(Thermostat, :count);
  end

  scenario "clicking the power mode btn adds a new row to the db with t/f" do
    visit '/'
    expect{click_button('PSM on')}.to change(Thermostat, :count);
  end
end
