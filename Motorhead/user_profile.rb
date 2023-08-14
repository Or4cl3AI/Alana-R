```ruby
module Motorhead
  class UserProfile
    attr_accessor :user_id, :name, :email, :password

    # Initialize a new user profile
    def initialize(user_id, name, email, password)
      @user_id = user_id
      @name = name
      @email = email
      @password = password
    end

    # Find a user profile by user_id
    def self.find(user_id)
      # Implementation to find a user profile
      # This is a placeholder and should be replaced with actual code
      # that interacts with your database
    end

    # Save the user profile
    def save
      # Implementation to save a user profile
      # This is a placeholder and should be replaced with actual code
      # that interacts with your database
    end

    # Update the user profile
    def update(attributes)
      # Implementation to update a user profile
      # This is a placeholder and should be replaced with actual code
      # that interacts with your database
    end

    # Delete the user profile
    def delete
      # Implementation to delete a user profile
      # This is a placeholder and should be replaced with actual code
      # that interacts with your database
    end
  end
end
```