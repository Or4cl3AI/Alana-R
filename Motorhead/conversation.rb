module Motorhead
  class Conversation
    attr_accessor :user_id, :context, :messages

    # Initialize a new conversation
    def initialize(user_id)
      @user_id = user_id
      @context = {}
      @messages = []
    end

    # Class method to find a conversation for a user
    def self.for_user(user_id)
      # Implementation to find a conversation for a user
    end

    # Add a message to the conversation
    def add_message(message)
      @messages << message
    end

    # Get the context of the conversation
    def get_context
      @context
    end

    # Update the context of the conversation
    def update_context(new_context)
      @context.merge!(new_context)
    end
  end
end