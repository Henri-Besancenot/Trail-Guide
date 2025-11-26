const bcrypt = require('bcrypt');
const status = require('http-status');
const userModel = require('../models/users.js');
const has = require('has-keys');

module.exports = {
  async getUserById(req, res) {
    if (!has(req.params, 'id'))
      throw { status: status.BAD_REQUEST, message: 'You must specify the id' };
    
    const { id } = req.params;
    const data = await userModel.getById(id);
    
    if (!data)
      throw { status: status.NOT_FOUND, message: 'User not found' };
    
    res.json({ status: true, message: 'Returning user', data });
  },

  async getUsers(req, res) {
    const data = await userModel.getAll();
    res.json({ status: true, message: 'Returning users', data });
  },

  async createUser(req, res) {
    if (!has(req.body, ['name', 'email', 'password']))
      throw { status: status.BAD_REQUEST, message: 'You must specify the username, email and password' };
    
    const { name, email, password } = req.body;

    const alreadyUser = await userModel.getByEmail(email);
    if (alreadyUser)
      throw { status: status.BAD_REQUEST, message: 'Email already used by another user' };

    const passhash = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({ name, email, passhash });
    res.json({ status: true, message: 'User added', data: newUser });
  },

  async updateUser(req, res) {
    if (!has(req.body, ['_id']))
      throw { status: status.BAD_REQUEST, message: 'You must specify the _id' };
    
    const updatedUser = await userModel.update(req.body);
    res.json({ status: true, message: 'User updated', data: updatedUser });
  },

  async deleteUser(req, res) {
    if (!has(req.params, 'id'))
      throw { status: status.BAD_REQUEST, message: 'You must specify the id' };
    
    const { id } = req.params;
    await userModel.delete(id);
    res.json({ status: true, message: 'User deleted' });
  },

  async loginUser(req, res) {
    if (!has(req.body, ['email', 'password']))
      throw { status: status.BAD_REQUEST, message: 'You must specify your email and password' };
    
    const { email, password } = req.body;
    const user = await userModel.getByEmail(email);

    if (!user)
      throw { status: status.NOT_FOUND, message: "This user doesn't exist" };

    const goodPass = await bcrypt.compare(password, user.passhash);

    if (!goodPass)
      throw { status: status.UNAUTHORIZED, message: 'Invalid password' };

    delete user.passhash;

    res.json({ status: true, message: 'Login successful', data: user });
  }
};
