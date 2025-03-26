const express = require('express');
const usersController = require('./users-controller');

const route = express.Router();

// module.exports = (app) => {
module.exports = (app, prefix = '/users') => {
  // app.use('/users', route);
  app.use(prefix, route);
  // app.use('/auth', usersRoutes);

  // localhost:5000/authentication/login
  // localhost:5000/api/users

  // Login user
  route.post('/login', usersController.loginUser);

  // Get list of users
  route.get('/', usersController.getUsers);

  // Create a new user
  route.post('/', usersController.createUser);

  // Get user detail
  route.get('/:id', usersController.getUser);

  // Update user
  route.put('/:id', usersController.updateUser);

  // Change password
  route.put('/:id/change-password', usersController.changePassword);

  // Delete user
  route.delete('/:id', usersController.deleteUser);
};
