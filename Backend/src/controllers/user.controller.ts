import { RequestHandler } from "express";
import * as userService from "../services/user.service";

// Get all users
export const getAllUsers: RequestHandler = (req, res) => {
  userService
    .getAllUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to get users" });
    });
};

// Get user by ID
export const getUserById: RequestHandler = (req, res) => {
  const { id } = req.params;
  userService
    .getUserById(id)
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json(user);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to get user" });
    });
};

// Create user
export const createUser: RequestHandler = (req, res) => {
  const userData = req.body;
  userService
    .createUser(userData)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to create user" });
    });
};

// Update user
export const updateUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  userService
    .updateUser(id, userData)
    .then((updatedUser) => {
      if (!updatedUser) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json(updatedUser);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update user" });
    });
};

// Delete user
export const deleteUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  userService
    .deleteUser(id)
    .then((deletedUser) => {
      if (!deletedUser) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json(deletedUser);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete user" });
    });
};
