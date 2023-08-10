const express = require('express')
const app = express()
const routes = require('./routes') 
const morgan = require('morgan')
const cors = require('cors')
// const http = require('http')
// const getCharacterById = require('./controllers/getCharacterById')

app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')

    next()
})

app.use(morgan('tiny'))

app.use(express.json())

// app.get("/rickandmorty/characters/:id", () => {})
// app.get("/rickandmorty/login", () => {})
// app.post("/rickandmorty/fav", () => {})
// app.delete("/rickandmorty/fav/:id", () => {})
app.use("/rickandmorty", routes)

const PORT = 3001
app.listen(PORT, () => {
    console.log("Working in port " + PORT)
})

// http.createServer(async (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')

//     const {url} = req
    
//     if(url.includes('/rickandmorty/character')) { //localhost:3001/rickandmorty/character/:id
//         const id = url.split('/').at(-1) // parseInt(url.split("/").pop())
//         try {
//             let character = await getCharacterById(id)
            
//             if(character?.name) {
//                 res.writeHead(200, {"Content-type": "application/json"})
//                 res.end(JSON.stringify(character))
//             } else {
//                 res.writeHead(404, {"Content-type": "text/plain"})
//                 res.end("No se encontro un personaje con ese id")
//             }
//         } catch {
//             res.writeHead(500, {"Content-type": "text/plain"})
//             res.end("Fallo de coneccion con la api")
//         }
//     }
// }).listen(3001, 'localhost') // 127.0.0.1
