const { ObjectId } = require('mongodb');
const database = require('./database.js');

function toObjectId(id) {
  if (!id) throw new Error('Invalid ID');
  return typeof id === 'string' ? new ObjectId(id) : id;
}

const users = {
  async getAll() {
    const dbo = await database.getDbo();
    return await dbo.collection('users').find().toArray();
  },
  async getById(id) {
    const dbo = await database.getDbo();
    return await dbo.collection('users').findOne({ _id: toObjectId(id) });
  },
  async getByEmail(email) {
    const dbo = await database.getDbo();
    return await dbo.collection('users').findOne({ email });
  },
  async create(user) {
    const dbo = await database.getDbo();

    delete user._id;
    delete user.id;

    const newUser = {
      name: user.name || "Anonymous",
      email: user.email || "",
      passhash: user.passhash || ""
    };
    const result = await dbo.collection('users').insertOne(newUser);
    return await dbo.collection('users').findOne({ _id: result.insertedId });
  },
  async update(user) {
    const dbo = await database.getDbo();
    const { _id } = user;
    if (!_id) throw new Error('Missing _id for update');

    delete user._id;
    delete user.id;

    const result = await dbo.collection('users').findOneAndUpdate(
      { _id: toObjectId(_id) },
      { $set: user },
      { returnDocument: 'after' }
    );
    return result.value;
  },
  async delete(id) {
    const dbo = await database.getDbo();
    await dbo.collection('users').deleteOne({ _id: toObjectId(id) });
  }
};

module.exports = users;
