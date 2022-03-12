const express = require("express");

const router = express.Router();

const {
  getAllTours,
  getTour,
  deleteTour,
  updateTour,
  createTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
  // checkId,
} = require("../controllers/tourController");

// router.param("id", checkId);

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);

router.route("/tour-stats").get(getTourStats);

router.route("/monthly-plan/:year").get(getMonthlyPlan);

router.route("/").get(getAllTours).post(createTour);

router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
