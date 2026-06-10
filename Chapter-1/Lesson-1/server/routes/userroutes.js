const express = require("express");
const router = express.Router();
const User = require("../models/users");
// https://localhost:5000/api/users/?page = {2}limit= {10}

// GET Paginated Data
router.get("/api/users", async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1
  const limit = parseInt(req.query.limit) || 10; // Default 10 items per page

  try {
    const startIndex = (page - 1) * limit;////10
    const total = await User.countDocuments();//20

    const users = await User.find().skip(startIndex).limit(limit);

    res.status(200).json({
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
