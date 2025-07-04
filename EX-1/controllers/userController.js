/** @format */

import * as userModel from "../models/userModel.js";

// GET /users/:id - Get one user
export const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = userModel.users.find((u) => u.id === userId);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

// POST /users - Create new user
export const createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newUser = {
    id: userModel.users.length + 1,
    name,
    email,
  };
  userModel.users.push(newUser);
  res.status(201).json(newUser);
};

// PUT /users/:id - Update user
export const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;

  const user = userModel.users.find((u) => u.id === userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
};

// DELETE /users/:id - Delete user
export const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const index = userModel.users.findIndex((u) => u.id === userId);
  if (index === -1) return res.status(404).json({ error: "User not found" });

  userModel.users.splice(index, 1);
  res.status(204).send();
};
