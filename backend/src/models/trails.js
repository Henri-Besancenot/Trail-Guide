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
            user: trail.user,
            distance: trail.distance || 0,
            elevation_gain:  trail.elevation_gain || 0,
            difficulty: trail.difficulty || "Easy",
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
    async search(filters) {
        const dbo = await database.getDbo();
        const query = {};
    
        if (filters.query) {
            query.$or = [
              { title: { $regex: filters.query, $options: 'i' } },
              { description: { $regex: filters.query, $options: 'i' } }
            ];
        }
    
        if (filters.minDistance && !isNaN(Number(filters.minDistance))) {
          query.distance = { ...query.distance, $gte: Number(filters.minDistance) };
        }

        if (filters.maxDistance && !isNaN(Number(filters.maxDistance))) {
          query.distance = { ...query.distance, $lte: Number(filters.maxDistance) };
        }

        if (filters.elevation_gain && !isNaN(Number(filters.elevation_gain))) {
          query.elevation_gain = { $lte: Number(filters.elevation_gain) };
        }

        if (filters.duration && !isNaN(Number(filters.duration))) {
          query.duration = { $lte: Number(filters.duration) };
        }

        if (filters.difficulty) {
          query.difficulty = { $regex: `^${filters.difficulty}$`, $options: 'i' };
        }

        // let sort = {};
        // if (filters.sortBy) {
        //     const order = filters.order === 'desc' ? -1 : 1;
        //     if (filters.sortBy === 'difficulty') {
        //         return await dbo.collection('trails').aggregate([
        //             { $match: query },
        //             { $addFields: { difficultyValue: { $switch: {
        //                 branches: [
        //                     { case: { $eq: ["$difficulty", "easy"] }, then: 1 },
        //                     { case: { $eq: ["$difficulty", "medium"] }, then: 2 },
        //                     { case: { $eq: ["$difficulty", "hard"] }, then: 3 },
        //                     { case: { $eq: ["$difficulty", "expert"] }, then: 4 }
        //                 ],
        //                 default: 0
        //             }}}},
        //             { $sort: { difficultyValue: order } }
        //         ]).toArray();
        //     } else {
        //         sort[filters.sortBy] = order;
        //     }
        // }
    
        return await dbo.collection('trails').find(query).toArray(); //.sort(sort)
    }
    

}

module.exports = trails;