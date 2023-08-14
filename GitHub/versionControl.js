const git = require('simple-git')();
const path = require('path');

// Set the path to the project directory
const projectPath = path.resolve(__dirname, '..');

// Initialize a new git repository
git.init()
  .then(() => console.log('Repository Initialized'))
  .catch((err) => console.error('Failed to initialize repository:', err));

// Add all files to the repository
git.add('.')
  .then(() => console.log('Files Added'))
  .catch((err) => console.error('Failed to add files:', err));

// Commit the changes
git.commit('Initial commit')
  .then(() => console.log('Changes Committed'))
  .catch((err) => console.error('Failed to commit changes:', err));

// Set the remote repository
git.addRemote('origin', 'https://github.com/username/repository.git')
  .then(() => console.log('Remote Repository Set'))
  .catch((err) => console.error('Failed to set remote repository:', err));

// Push the changes to the remote repository
git.push('origin', 'master')
  .then(() => console.log('Changes Pushed to Remote Repository'))
  .catch((err) => console.error('Failed to push changes:', err));

// Pull the changes from the remote repository
git.pull('origin', 'master')
  .then(() => console.log('Changes Pulled from Remote Repository'))
  .catch((err) => console.error('Failed to pull changes:', err));

// Check the status of the repository
git.status()
  .then((status) => console.log(status))
  .catch((err) => console.error('Failed to get status:', err));