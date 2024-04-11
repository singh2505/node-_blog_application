import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controller/posts.js";

// Creating a new Router object
const router = express.Router();

// Define routes for various HTTP methods and their corresponding functions
router.get("/", getPosts); // we will Get all posts from here 
router.get("/:id", getPost); // we will Get a specific post by its ID from here 
router.post("/", addPost); // Adding  a new post
router.delete("/:id", deletePost); // Deleting  a post by its ID
router.put("/:id", updatePost); // Updating a post by its ID

export default router;
