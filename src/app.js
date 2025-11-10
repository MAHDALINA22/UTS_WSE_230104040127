const express = require("express");
const app = express();
const errorHandler = require("./middlewares/errorHandler");
const articleRoutes = require("./routes/articles.routes");

app.use(express.json());

// Main route
app.use("/api/articles", articleRoutes);

// Info endpoint
app.get("/api/info", (req, res) => {
  res.status(200).json({
    name: "UTS Web Service Engineering",
    author: "Mahdalina",
    nim: "230104040127",
    resource: "articles",
    version: "1.0.0"
  });
});

// Global error handler
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
