let db = require('../utils/favs')

const save = (newFav) => {
    db.push(newFav)

    return db // [] => [{}, {}]
}

const deleteById = (id) => {
    db = db.filter(char => char.id !== Number(id))

    return db // [{}, {}] => [{}] => []
}

module.exports = { save, deleteById }