const data = require('../utils/data')

const getCharacterById = id => {
    return data.find(char => char.id == id)
}

module.exports = getCharacterById
