import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTours,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "./../controllers/tourController.js";

const router = express.Router();

// create new tour
router.post("/", createTour);
// update tour
router.put("/:id", updateTour);
// delete tour
router.delete("/:id", deleteTour);
// getSingle tour
router.get("/:id", getSingleTour);
// getAll tour
router.get("/", getAllTour);
// get tour by search
router.get("/search/getToursBySearch", getTourBySearch);
// get featured tour
router.get("/search/getFeaturedTours", getFeaturedTours);
//get the amount of tours available
router.get("/search/getTourCount", getTourCount);

export default router;
