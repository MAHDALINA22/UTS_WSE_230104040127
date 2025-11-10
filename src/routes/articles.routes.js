const express = require("express");
const router = express.Router();

const controller = require("../controllers/articles.controller");
const validateArticle = require("../middlewares/validateArticle");

// CRUD endpoints
router.get("/", controller.getAllArticles);
router.get("/:id", controller.getArticleById);
router.post("/", validateArticle, controller.createArticle);
router.put("/:id", validateArticle, controller.updateArticle);
router.delete("/:id", controller.deleteArticle);

module.exports = router;
