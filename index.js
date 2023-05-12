const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(process.env.URL);
    const data = response.data;
    let html = `<html><head><title>Desafio</title></head><body>`;

    data.slice(0, 100).forEach(item => {
      html += `<h3>${item.albumId} / ${item.id} - ${item.title}</h3><img src='${item.url}'><br />`;
    });

    html += `</body></html>`;
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
