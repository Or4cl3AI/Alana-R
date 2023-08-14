import React, { Component } from 'react';
import Chat from './components/Chat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      conversations: [],
    };
  }

  componentDidMount() {
    // Fetch user and conversations data from the backend
    // This is a placeholder and should be replaced with actual API calls
    const user = {}; // Replace with actual user data
    const conversations = []; // Replace with actual conversations data

    this.setState({ user, conversations });
  }

  render() {
    const { user, conversations } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to MotorStack</h1>
        </header>
        <main>
          {user ? (
            <Chat user={user} conversations={conversations} />
          ) : (
            <p>Loading...</p>
          )}
        </main>
      </div>
    );
  }
}

export default App;