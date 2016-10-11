class Board < ApplicationRecord
  belongs_to :user
  has_many :lists, dependent: :destroy

  has_many :user_boardings
  has_many :members,  through: :user_boardings,
                      source: :user

end
