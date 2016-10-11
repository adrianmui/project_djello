#Project Djello

# README

Adrian.


## Pseudo Code

User has many boards.
Boards have many Users as Members.

### Users.

  Devise Authentication.
  
  username, email, password, standard.

  has_many Boards

### Boards.

  ?title

  belongs_to User
  
  has_many Lists

### Lists.

  ?title
  
  ?description

  belongs_to Board
  
  has_many Tasks

### Tasks.

  ?title
  
  ?description
  
  #votes
  
  completed?

  belongs_to List.
