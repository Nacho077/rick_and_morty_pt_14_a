import './App.css';
import React from 'react'
// import { useState } from 'react'
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import Nav from './components/Nav';
import Detail from './components/Detail'
import About from './components/About'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'

function App() {
   let [characters, setCharacters] = React.useState([])

   const validation = (id) => {
      const result = characters.find(character => character.id == id)
      // result => undefined
      // result =>  {}
      return !!result

      // const result2 = characters.filter(character => character.id == id)
      // 1 => true
      // 0 => false
      // return !!result2.length

      // const result3 = characters.includes(character => Number(character.id) ==  Number(id)) => NO FUNCIONA
      // console.log(result3)      
   } 

   const onSearch = async (id) => {
      if (validation(id)) {
         window.alert("Ya existe ese personaje")
         return 
      }
      
      // axios(`https://rickandmortyapi.com/api/character/${id}`)
      // .then(({data}) => {
      //    if(data.name) {
      //       setCharacters([...characters, data])
      //    } else {
      //       window.alert("No existe un personaje con ese ID")
      //    }
      // })
      // .catch((error) => {
      //    console.log(error)
      //    window.alert("No existe un personaje con ese ID ERROR")
      // })

      try {
         const result = await axios(`https://rickandmortyapi.com/api/character/${id}`)

         if (result.data.name) {
            setCharacters([...characters, result.data])
         } else {
            window.alert("No existe un personaje con ese ID")
         }
      } catch(error) {
         console.log(error)
         window.alert("No existe un personaje con ese ID ERROR")
      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter(character => character.id != id))
      // Number(character.id) !== Number(id)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/detail/:id" element={<Detail />} />
            
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
         </Routes>
      </div>
   );
}

export default App;
