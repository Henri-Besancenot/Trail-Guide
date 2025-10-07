const { ObjectId } = require('mongodb');
const database = require('./database.js');

function toObjectId(id) {
    if (!id) throw new Error('Invalid ID');
    return typeof id === 'string' ? new ObjectId(id) : id;
  }

const trails = {
    async getAll() {
        const dbo = await database.getDbo();
        return await dbo.collection('trails').find().toArray();
    },
    async getById(id) {
        const dbo = await database.getDbo();
        return await dbo.collection('trails').findOne({ _id: toObjectId(id) });
  },
    async create(trail) {
        const dbo = await database.getDbo();

        delete trail._id;
        delete trail.id;
        
        const newTrail = {
            title: trail.title || "Untitled Trail",
            description: trail.description || "",
            distance: trail.distance || 0,
            elevation_gain:  trail.elevation_gain || 0,
            difficulty: trail.difficulty || "easy",
            duration: trail.duration || 0,
            images: Array.isArray(trail.images) ? trail.images : [],
            gpx_file: trail.gpx_file || ""
        };
        const result = await dbo.collection('trails').insertOne(newTrail);
        return await dbo.collection('trails').findOne({ _id: result.insertedId });
    },
    async update(trail) {
        const dbo = await database.getDbo();
        const {_id} = trail;
        if (!_id) throw new Error('Missing _id for update');

        delete trail._id;
        delete trail.id;

        const result = await dbo.collection('trails').findOneAndUpdate(
            { _id: toObjectId(_id) },
            { $set: trail },
            { returnDocument: 'after' }
          );
          return result.value;
    },
    async delete(id) {
        const dbo = await database.getDbo();
        await dbo.collection('trails').deleteOne({ _id: toObjectId(id) });
    },
    async search(query) {
        const dbo = await database.getDbo();
        return await dbo.collection('trails').find({description: query}).toArray();
    }

}

module.exports = trails;