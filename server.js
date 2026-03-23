const express = require('express');
const app = express();
app.use(express.json());

let articles = [
  { id: 1, titre: "Introduction au web", auteur: "Charles", date: "2026-01-10", categorie: "Technologie", tags: ["web", "debutant"] }
];

// GET /api/articles (Lire tous les articles) [cite: 53]
app.get('/api/articles', (req, res) => {
  res.status(200).json(articles);
});

// POST /api/articles (Créer un article) [cite: 46]
app.post('/api/articles', (req, res) => {
  const newArticle = { id: articles.length + 1, ...req.body, date: new Date().toISOString().split('T')[0] };
  articles.push(newArticle);
  res.status(201).json(newArticle); // Code 201 pour création [cite: 102]
});

// GET /api/articles/:id (Lire un article unique) [cite: 57]
app.get('/api/articles/:id', (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) return res.status(404).send("Article non trouvé"); [cite: 102]
  res.json(article);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));