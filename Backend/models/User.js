```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the User schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  personality: {
    type: String,
    required: true
  },
  conversations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conversation'
  }],
  password: {
    type: String,
    required: true
  }
});

// Hash the password before saving the user model
UserSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

// Compare password input to password saved in database
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
```