const { fail } = require("../utils/apiResponse");

function errorHandler(err, req, res, next) {
  console.error("Internal Server Error:", err.message);
  res.status(500).json(fail("Terjadi kesalahan pada server."));
}

module.exports = errorHandler;
