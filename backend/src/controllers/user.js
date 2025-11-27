import bcrypt from "bcrypt";
import status from "http-status";
import * as userModel from "../models/users.js";

function hasKeys(obj, keys) {
  if (!obj || typeof obj !== "object") return false;
  return keys.every(key => key in obj);
}

export async function getUserById(req, res) {
  if (!hasKeys(req.params, "id"))
    throw { status: status.BAD_REQUEST, message: "You must specify the id" };

  const { id } = req.params;
  const data = await userModel.getById(id);

  if (!data)
    throw { status: status.NOT_FOUND, message: "User not found" };

  res.json({ status: true, message: "Returning user", data });
}

export async function getUsers(req, res) {
  const data = await userModel.getAll();
  res.json({ status: true, message: "Returning users", data });
}

export async function createUser(req, res) {
  if (!hasKeys(req.body, ["name", "email", "password"]))
    throw { status: status.BAD_REQUEST, message: "You must specify the username, email and password" };

  const { name, email, password } = req.body;

  const alreadyUser = await userModel.getByEmail(email);
  if (alreadyUser)
    throw { status: status.BAD_REQUEST, message: "Email already used by another user" };

  const passhash = await bcrypt.hash(password, 10);
  const newUser = await userModel.create({ name, email, passhash });
  res.json({ status: true, message: "User added", data: newUser });
}

export async function updateUser(req, res) {
  if (!hasKeys(req.body, ["_id", "name", "email"]))
    throw { status: status.BAD_REQUEST, message: "You must specify all the information" };

  const { _id, email } = req.body;
  const existingUser = await userModel.getByEmail(email);
  if (existingUser && existingUser._id.toString() !== _id) {
    throw { status: status.BAD_REQUEST, message: "Email already used by another user" };
  }

  const updatedUser = await userModel.update(req.body);
  res.json({ status: true, message: "User updated", data: updatedUser });
}

export async function deleteUser(req, res) {
  if (!hasKeys(req.params, "id"))
    throw { status: status.BAD_REQUEST, message: "You must specify the id" };

  const { id } = req.params;
  await userModel.deleteUser(id);
  res.json({ status: true, message: "User deleted" });
}

export async function loginUser(req, res) {
  if (!hasKeys(req.body, ["email", "password"]))
    throw { status: status.BAD_REQUEST, message: "You must specify your email and password" };

  const { email, password } = req.body;
  const user = await userModel.getByEmail(email);

  if (!user)
    throw { status: status.NOT_FOUND, message: "This user doesn't exist" };

  const goodPass = await bcrypt.compare(password, user.passhash);
  if (!goodPass)
    throw { status: status.UNAUTHORIZED, message: "Invalid password" };

  delete user.passhash;
  res.json({ status: true, message: "Login successful", data: user });
}

export async function updateTrailsSet(req, res) {
  if (!hasKeys(req.body, ["_id", "trail", "set", "toAdd"]))
    throw { status: status.BAD_REQUEST, message: "Miss some information" };

  const updatedUser = await userModel.updateTrailsSet(req.body);
  res.json({ status: true, message: "Set updated", data: updatedUser });
}
