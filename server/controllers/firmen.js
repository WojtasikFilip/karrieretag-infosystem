const asyncHandler = require('express-async-handler');
const model = require('../model/firmen');

const getFirmen = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getFirmen());
});

const getFirmenJson = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getFirmenJson());
});

module.exports = {
  getFirmen,
  getFirmenJson,
};
