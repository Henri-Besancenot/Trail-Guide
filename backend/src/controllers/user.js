const bcrypt = require('bcrypt');
const status = require('http-status');
const userModel = require('../models/users.js');
const has = require('has-keys');

module.exports = {
  async getUserById(req, res) {
    if (!has(req.params, 'id'))
      throw { code: status.BAD_REQUEST, message: 'You must specify the id' };
    
    const { id } = req.params;
    const data = await userModel.getById(id);
    
    if (!data)
      throw { code: status.NOT_FOUND, message: 'User not found' };
    
    res.json({ status: true, message: 'Returning user', data });
  },

  async getUsers(req, res) {
    const data = await userModel.getAll();
    res.json({ status: true, message: 'Returning users', data });
  },

  async createUser(req, res) {
    if (!has(req.body, ['name', 'email', 'password']))
      throw { code: status.BAD_REQUEST, message: 'You must specify name and email' };
    
    const { name, email, password } = req.body;
    const passhash = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({ name, email, passhash });
    res.json({ status: true, message: 'User added', data: newUser });
  },

  async updateUser(req, res) {
    if (!has(req.body, ['_id']))
      throw { code: status.BAD_REQUEST, message: 'You must specify the _id' };
    
    const updatedUser = await userModel.update(req.body);
    res.json({ status: true, message: 'User updated', data: updatedUser });
  },

  async deleteUser(req, res) {
    if (!has(req.params, 'id'))
      throw { code: status.BAD_REQUEST, message: 'You must specify the id' };
    
    const { id } = req.params;
    await userModel.delete(id);
    res.json({ status: true, message: 'User deleted' });
  }
};
