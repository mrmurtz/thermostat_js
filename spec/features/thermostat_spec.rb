require 'spec_helper'

feature "Thermostat" do
  scenario "we can see the Thermostat" do
    visit("/")
    expect(page).to have_content "Current temperature"
  end
end
