const asyncHandler = require("express-async-handler");

const API = require("../model/apiList");

// @desc    Creates a new event event
// @route   POST /api/events
// @access  Public
const createAPI = asyncHandler(async (req, res) => {
  const api = ({ apiName, description, endpoint, method } = req.body);

  const __event = await API.create(api);

  if (__event) {
    res.status(201).json({
      success: true,
      error: "",
      __event,
    });
  } else {
    res.status(400);
    throw new Error("Invalid api data");
  }
});

// @desc    Get event event
// @route   GET /api/events/event
// @access  Private
const getAPIs = asyncHandler(async (req, res) => {
  const event = await API.find().all();
  if (event) {
    res.json({
      event,
    });
  } else {
    res.status(404);
    throw new Error("APIs not found");
  }
});

// @desc    Update event event
// @route   PUT /api/events/event
// @access  Private
const updateAPI = asyncHandler(async (req, res) => {
  const event = await API.findById(req.params.id);

  if (event) {
    await API.updateOne({ id: req.params.id }, req.body);
    const __event = await API.find({ eventid: req.params.id });
    res.json({
      __event,
    });
  } else {
    res.status(404);
    throw new Error("API not found");
  }
});

// @desc    Get event by ID
// @route   GET /api/events/:id
// @access  Public
const getAPIById = asyncHandler(async (req, res) => {
  const event = await API.findById(req.params.id);

  if (event) {
    res.json(event);
  } else {
    res.status(404);
    throw new Error("API not found");
  }
});

// @desc    Delete event
// @route   DELETE /api/events/:id
// @access  Private/Admin
const deleteAPI = asyncHandler(async (req, res) => {
  const event = await User.findById(req.params.id);

  if (event) {
    await event.remove();
    res.json({ message: "API removed" });
  } else {
    res.status(404);
    throw new Error("API not found");
  }
});

module.exports = {
  createAPI,
  getAPIs,
  updateAPI,
  getAPIById,
  deleteAPI,
};