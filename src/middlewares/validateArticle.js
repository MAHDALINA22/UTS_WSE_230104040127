const { fail } = require("../utils/apiResponse");

function validateArticle(req, res, next) {
  const { title, author, content } = req.body;

  if (!title || !author || !content) {
    return res.status(400).json(fail("Field 'title', 'author', dan 'content' wajib diisi"));
  }
  next();
}

module.exports = validateArticle;
