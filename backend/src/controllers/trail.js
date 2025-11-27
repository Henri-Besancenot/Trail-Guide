import gpxParse from "gpx-parse";
import status from "http-status";
import * as trailModel from "../models/trails.js";

function hasKeys(obj, keys) {
  if (!obj || typeof obj !== "object") return false;
  return keys.every(key => key in obj);
}

export async function getTrailById(req, res) {
  if (!hasKeys(req.params, ["id"]))
    throw { status: status.BAD_REQUEST, message: "You must specify the id" };

  const { id } = req.params;
  const data = await trailModel.getById(id);

  if (!data)
    throw { status: status.NOT_FOUND, message: "Trail not found" };

  res.json({ status: true, message: "Returning trail", data });
}

export async function getTrails(req, res) {
  const filters = req.query;
  const data = await trailModel.search(filters);
  res.json({ status: true, message: "Returning filtered trails", data });
}

export async function createTrail(req, res) {
  if (!hasKeys(req.body, ["title", "description", "user", "distance", "elevation_gain", "difficulty", "duration", "images", "gpx_file"]))
    throw { status: status.BAD_REQUEST, message: "You must specify all the informations needed" };

  const { title, description, user, distance, elevation_gain, difficulty, duration, images, gpx_file } = req.body;
  const response = await fetch(gpx_file);
  if (!response.ok) {
    throw { status: status.BAD_REQUEST, message: "Impossible de télécharger le fichier GPX" };
  }

  const gpxText = await response.text();
  const gpxData = await new Promise((resolve, reject) => {
    gpxParse.parseGpx(gpxText, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

  const track = gpxData.tracks?.[0];
  const firstPoint = track?.segments?.[0]?.[0];
  const start_coords = firstPoint ? [firstPoint.lat, firstPoint.lon] : null;

  const newTrail = await trailModel.create({ title, description, user, distance, elevation_gain, difficulty, duration, images, gpx_file, start_coords });
  res.json({ status: true, message: "Trail added", data: newTrail });
}

export async function updateTrail(req, res) {
  if (!hasKeys(req.body, ["_id"]))
    throw { status: status.BAD_REQUEST, message: "You must specify the _id" };

  const updatedTrail = await trailModel.update(req.body);
  res.json({ status: true, message: "Trail updated", data: updatedTrail });
}

export async function deleteTrail(req, res) {
  if (!hasKeys(req.params, ["id"]))
    throw { status: status.BAD_REQUEST, message: "You must specify the id" };

  const { id } = req.params;
  await trailModel.deleteTrail(id);
  res.json({ status: true, message: "Trail deleted" });
}
