import { ObjectId } from "mongodb";
import { getDbo } from "./database.js";

function toObjectId(id) {
  if (!id) throw new Error("Invalid ID");
  return typeof id === "string" ? new ObjectId(id) : id;
}

export async function getAll() {
  const dbo = await getDbo();
  return dbo.collection("users").find().toArray();
}

export async function getById(id) {
  const dbo = await getDbo();
  return dbo.collection("users").findOne({ _id: toObjectId(id) });
}

export async function getByEmail(email) {
  const dbo = await getDbo();
  return dbo.collection("users").findOne({ email });
}

export async function create(user) {
  const dbo = await getDbo();

  delete user._id;
  delete user.id;

  const newUser = {
    name: user.name || "Anonymous",
    email: user.email || "",
    passhash: user.passhash || "",
    favorite: [],
    created: [],
  };

  const result = await dbo.collection("users").insertOne(newUser);
  return dbo.collection("users").findOne({ _id: result.insertedId });
}

export async function update(user) {
  const dbo = await getDbo();
  const { _id } = user;
  if (!_id) throw new Error("Missing _id for update");

  delete user._id;
  delete user.id;

  const result = await dbo.collection("users").findOneAndUpdate(
    { _id: toObjectId(_id) },
    { $set: user },
    { returnDocument: "after" }
  );
  return result.value;
}

export async function deleteUser(id) {
  const dbo = await getDbo();
  await dbo.collection("users").deleteOne({ _id: toObjectId(id) });
}

export async function updateTrailsSet({ _id, trail, set, toAdd }) {
  const dbo = await getDbo();
  if (!_id) throw new Error("Missing _id for update");

  const updateQuery = toAdd
    ? { $addToSet: { [set]: toObjectId(trail) } }
    : { $pull: { [set]: toObjectId(trail) } };

  const result = await dbo.collection("users").findOneAndUpdate(
    { _id: toObjectId(_id) },
    updateQuery,
    { returnDocument: "after" }
  );
  return result.value;
}
