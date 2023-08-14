let users = require('../utils/users')

const getUserByEmailAndPassword = (email, password) => {
    const user = users.find(
        (user) => user.email === email && user.password === password
      );

    return user
}

module.exports = {
    getUserByEmailAndPassword
}