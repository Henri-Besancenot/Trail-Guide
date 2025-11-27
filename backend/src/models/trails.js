import { ObjectId } from "mongodb";
import { getDbo } from "./database.js";

function toObjectId(id) {
  if (!id) throw new Error("Invalid ID");
  return typeof id === "string" ? new ObjectId(id) : id;
}

export async function getAll() {
  const dbo = await getDbo();
  return dbo.collection("trails").find().toArray();
}

export async function getById(id) {
  const dbo = await getDbo();
  return dbo.collection("trails").findOne({ _id: toObjectId(id) });
}

export async function create(trail) {
  const dbo = await getDbo();

  delete trail._id;
  delete trail.id;

  const newTrail = {
    title: trail.title || "Untitled Trail",
    description: trail.description || "",
    user: trail.user,
    distance: trail.distance || 0,
    elevation_gain: trail.elevation_gain || 0,
    difficulty: trail.difficulty || "Easy",
    duration: trail.duration || 0,
    images: Array.isArray(trail.images) ? trail.images : [],
    gpx_file: trail.gpx_file || "",
    start_coords: trail.start_coords || [0, 0],
  };

  const result = await dbo.collection("trails").insertOne(newTrail);
  return dbo.collection("trails").findOne({ _id: result.insertedId });
}

export async function update(trail) {
  const dbo = await getDbo();
  const { _id } = trail;
  if (!_id) throw new Error("Missing _id for update");

  delete trail._id;
  delete trail.id;

  const result = await dbo.collection("trails").findOneAndUpdate(
    { _id: toObjectId(_id) },
    { $set: trail },
    { returnDocument: "after" }
  );
  return result.value;
}

export async function deleteTrail(id) {
  const dbo = await getDbo();
  await dbo.collection("trails").deleteOne({ _id: toObjectId(id) });
}

export async function search(filters) {
  const dbo = await getDbo();
  const query = {};

  if (filters.query) {
    query.$or = [
      { title: { $regex: filters.query, $options: "i" } },
      { description: { $regex: filters.query, $options: "i" } },
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
    query.difficulty = { $regex: `^${filters.difficulty}$`, $options: "i" };
  }

  return dbo.collection("trails").find(query).toArray();
}
