# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Task.all.destroy_all
List.all.destroy_all
Board.all.destroy_all

User.all.each do |user|
  
  3.times do |n|
    puts 'created boards for user #{n}th time'
    user.boards.create!({title: Faker::Pokemon.name});
  end
  user.boards.each do |board|
    3.times do |m|
      puts 'created lists for boards for user #{m}th time'
      board.lists.create!({
        title: Faker::Pokemon.location,
        description: Faker::Hipster.word
      })
    end

    board.lists.each do |list|
      3.times do |p|
        puts 'created tasks for lists for boards for user #{p}th time'
        list.tasks.create!({
          title: Faker::StarWars.droid,
          description: Faker::StarWars.quote,
          votes: Faker::Number.between(1, 5),
          completed: Faker::Boolean.boolean
          })
      end
    end
  end
  puts "has been created for user #{user.email}"
end