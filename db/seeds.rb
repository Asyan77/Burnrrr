# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ActiveRecord::Base.transaction do
    # Like.destroy_all
    # Album.destroy_all
    User.destroy_all
    # Photo.destroy_all

    # ActiveRecord::Base.connection.reset_pk_sequence!('teas')
    ActiveRecord::Base.connection.reset_pk_sequence!('users')
    # ActiveRecord::Base.connection.reset_pk_sequence!('transactions')
    # ActiveRecord::Base.connection.reset_pk_sequence!('likes')


  puts "Creating users..."
  zach = User.create!(username: 'HoneyBee', email: 'zach@mail.com', password: 'zachword')
  frankie = User.create!(username: 'Doodie', email: 'frankie@mail.com', password: 'frankieword')
  ellie = User.create!(username: 'Smelly Ellie', email: 'olaf@mail.com', password: 'olafword')
  ben = User.create!(username: 'Creedy Pants', email: 'ben@mail.com', password: 'benword')
  michael = User.create!(username: 'Emo Scuba Steve', email: 'michael@mail.com', password: 'michaelword')
  riley  = User.create!(username: 'Riley Monster', email: 'riley@mail.com', password: 'rileyword')
  collin = User.create!(username: 'Colly Polly', email: 'collin@mail.com', password: 'collinword')
  nikki = User.create!(username: " Nikki DanceParty", email: 'nikki@mail.com', password: 'nikkiword')

end