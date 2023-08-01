const http = require('http')
const getCharacterById = require('./controllers/getCharacterById')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    const {url} = req
    console.log(url)
    if(url.includes('/rickandmorty/character')) { //localhost:3001/rickandmorty/character/:id
        const id = url.split('/').at(-1) // parseInt(url.split("/").pop())
        let character = getCharacterById(id)
        
        if(character?.name) {
            res.writeHead(200, {"Content-type": "application/json"})
            res.end(JSON.stringify(character))
        } else {
            res.writeHead(404, {"Content-type": "text/plain"})
            res.end("No se encontro un personaje con ese id")
        }
    }
}).listen(3001, 'localhost') // 127.0.0.1