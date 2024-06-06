const Livro = require('../models/livro');

module.exports.livros_list = () =>{
    return Livro
        .find()
        .exec()
}

module.exports.lookUp = id => {
    return Contrato
        .findOne({ bookId: id })
        .exec()
}

module.exports.booksByCharacter = (character) => {
    return Livro
        .find({ characters: character })
        .exec()
}

module.exports.booksByGenre = (genre) => {
    return Livro
        .find({ genres: genre })
        .exec()
}

module.exports.genres_list = () => {
    return Livro
        .distinct("genres")
        .sort()
        .exec()
}

module.exports.characters_list = () => {
    return Livro
        .distinct("characters")
        .sort()
        .exec()
}

module.exports.insert = (livro) => {
    if (Livro.findOne({ bookId: livro.bookId }).length == 1) {
        return Promise.reject(new Error("Id already exists"))
    }

    var novoLivro = new Livro(livro)
    return novoLivro.save()
}

module.exports.delete = id => {
    return Livro
        .deleteOne({ bookId: id })
        .exec();
}

module.exports.update = (id, livro) => {
    return Livro
        .updateOne({ bookId: id }, livro)
        .exec();
}