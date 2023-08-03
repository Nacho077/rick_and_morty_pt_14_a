const http = require('http')
const getCharacterById = require('./controllers/getCharacterById')

http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    const {url} = req
    
    if(url.includes('/rickandmorty/character')) { //localhost:3001/rickandmorty/character/:id
        const id = url.split('/').at(-1) // parseInt(url.split("/").pop())
        try {
            let character = await getCharacterById(id)
            
            if(character?.name) {
                res.writeHead(200, {"Content-type": "application/json"})
                res.end(JSON.stringify(character))
            } else {
                res.writeHead(404, {"Content-type": "text/plain"})
                res.end("No se encontro un personaje con ese id")
            }
        } catch {
            res.writeHead(500, {"Content-type": "text/plain"})
            res.end("Fallo de coneccion con la api")
        }
    }
}).listen(3001, 'localhost') // 127.0.0.1