/** @format */
import * as userControl from "../controllers/userController.js";
import * as userModel from "../models/userModel.js";
import express from "express";
const router = express.Router();

// GET /users - List all users
router.get("/users", userModel.getAllUsers);

// GET /users/:id - Get one user
router.get("/users/:id", userControl.getUserById);

// POST /users - Create new user
router.post("/users", userControl.createUser);

// PUT /users/:id - Update user
router.put("/users/:id", userControl.updateUser);

// DELETE /users/:id - Delete user
router.delete("/users/:id", userControl.deleteUser);

export default router;
