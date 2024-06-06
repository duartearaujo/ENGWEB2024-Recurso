const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
    "bookId": String,
    "title": String,
    "series": String,
    "author": Array,
    "rating": Number,
    "description": String,
    "language": String,
    "isbn": String,
    "genres": Array,
    "characters": Array,
    "bookFormat": String,
    "edition": String,
    "pages": Number,
    "publisher": String,
    "publishDate": String,
    "firstPublishDate": String,
    "awards": Array,
    "numRatings": Number,
    "ratingsByStars": Array,
    "likedPercent": Number,
    "setting": Array,
    "coverImg": String,
    "bbeScore": Number,
    "bbeVotes": Number,
    "price": Number
}, { versionKey: false });

module.exports = mongoose.model('livros', livroSchema);