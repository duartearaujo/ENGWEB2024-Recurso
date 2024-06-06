const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 17001;
const API = 'http://localhost:17000/books';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public'), { 
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API);
        const livros = response.data;
        res.render('index', { livros });
    } catch (error) {
        console.error('Error fetching data from API:', error.message);
    }
});

app.get('/:id', async (req, res) => {
    try {
        const response = await axios.get(`${API}/${req.params.id}`);
        const livro = response.data;
        res.render('book', { livro });
    } catch (error) {
        console.error('Error fetching data from API:', error.message);
    }
});

app.get('/entidades/:id', async (req, res) => {
    try {
        const response = await axios.get(`${API}/${req.params.id}`);
        const autor = response.data;
        res.render('author', { autor });
    } catch (error) {
        console.error('Error fetching data from API:', error.message);
    }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});