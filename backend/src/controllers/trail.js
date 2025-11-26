const status = require('http-status');
const trailModel = require('../models/trails.js');
const has = require('has-keys');

module.exports = {
    async getTrailById(req, res) {
        if (!has(req.params, 'id'))
          throw { status: status.BAD_REQUEST, message: 'You must specify the id' };
        
        const { id } = req.params;
        const data = await trailModel.getById(id);

        if (!data)
          throw { status: status.NOT_FOUND, message: 'Trail not found' };
        
        res.json({ status: true, message: 'Returning trail', data });
      },
    
      async getTrails(req, res) {
          const filters = req.query;
          const data = await trailModel.search(filters);
          res.json({ status: true, message: 'Returning filtered trails', data });
      },
    
      async createTrail(req, res) {
        if (!has(req.body, ['title', 'description', 'user', 'distance', 'elevation_gain', 'difficulty', 'duration', 'images', 'gpx_file']))
          throw { status: status.BAD_REQUEST, message: 'You must specify all the informations needed' };
        
        const { title, description, user, distance, elevation_gain, difficulty, duration, images, gpx_file } = req.body;
        const newTrail = await trailModel.create({ title, description, user, distance, elevation_gain, difficulty, duration, images, gpx_file });
        res.json({ status: true, message: 'Trail added', data: newTrail });
      },
    
      async updateTrail(req, res) {
        if (!has(req.body, ['_id']))
          throw { status: status.BAD_REQUEST, message: 'You must specify the _id' };
        
        const updatedTrail = await trailModel.update(req.body);
        res.json({ status: true, message: 'Trail updated', data: updatedTrail });
      },
    
      async deleteTrail(req, res) {
        if (!has(req.params, 'id'))
          throw { status: status.BAD_REQUEST, message: 'You must specify the id' };
        
        const { id } = req.params;
        await trailModel.delete(id);
        res.json({ status: true, message: 'Trail deleted' });
      }
};
