const status = require('http-status');
const trailModel = require('../models/trails.js');
const has = require('has-keys');

module.exports = {
    async getTrailById(req, res) {
        if (!has(req.params, 'id'))
          throw { code: status.BAD_REQUEST, message: 'You must specify the id' };
        
        const { id } = req.params;
        const data = await trailModel.getById(id);
        
        if (!data)
          throw { code: status.NOT_FOUND, message: 'Trail not found' };
        
        res.json({ status: true, message: 'Returning trail', data });
      },
    
      async getTrails(req, res) {
        const data = await trailModel.getAll();
        res.json({ status: true, message: 'Returning trails', data });
      },
    
      async createTrail(req, res) {
        if (!has(req.body, ['title', 'description', 'images', 'gpx_file']))
          throw { code: status.BAD_REQUEST, message: 'You must specify title, description, images and gpx_file' };
        
        const { title, description, images, gpx_file } = req.body;
        const newTrail = await trailModel.create({ title, description, images, gpx_file });
        res.json({ status: true, message: 'Trail added', data: newTrail });
      },
    
      async updateTrail(req, res) {
        if (!has(req.body, ['_id']))
          throw { code: status.BAD_REQUEST, message: 'You must specify the _id' };
        
        const updatedTrail = await trailModel.update(req.body);
        res.json({ status: true, message: 'Trail updated', data: updatedTrail });
      },
    
      async deleteTrail(req, res) {
        if (!has(req.params, 'id'))
          throw { code: status.BAD_REQUEST, message: 'You must specify the id' };
        
        const { id } = req.params;
        await trailModel.delete(id);
        res.json({ status: true, message: 'Trail deleted' });
      }
};
