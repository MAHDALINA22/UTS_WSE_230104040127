const articles = require("../data/articles.data");
const { success, fail } = require("../utils/apiResponse");

let nextId = articles.length + 1;

// GET all articles
function getAllArticles(req, res) {
  res.status(200).json(success("Berhasil mengambil semua artikel", articles));
}

// GET article by ID
function getArticleById(req, res) {
  const id = parseInt(req.params.id);
  const article = articles.find(a => a.id === id);

  if (!article) return res.status(404).json(fail("Artikel tidak ditemukan"));
  res.status(200).json(success("Artikel ditemukan", article));
}

// POST new article
function createArticle(req, res) {
  const { title, author, content } = req.body;
  const newArticle = { id: nextId++, title, author, content };
  articles.push(newArticle);
  res.status(201).json(success("Artikel berhasil ditambahkan", newArticle));
}

// PUT update article
function updateArticle(req, res) {
  const id = parseInt(req.params.id);
  const { title, author, content } = req.body;
  const index = articles.findIndex(a => a.id === id);

  if (index === -1) return res.status(404).json(fail("Artikel tidak ditemukan"));

  articles[index] = { id, title, author, content };
  res.status(200).json(success("Artikel berhasil diperbarui", articles[index]));
}

// DELETE article
function deleteArticle(req, res) {
  const id = parseInt(req.params.id);
  const index = articles.findIndex(a => a.id === id);

  if (index === -1) return res.status(404).json(fail("Artikel tidak ditemukan"));

  articles.splice(index, 1);
  res.status(204).send(); // Tidak ada konten
}

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
};
