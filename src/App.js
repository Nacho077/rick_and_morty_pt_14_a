import './App.css';
import React, { useEffect } from 'react'
// import { useState } from 'react'
// import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import Nav from './components/Nav/Nav';
import Detail from './components/Details/Detail'
import About from './components/About/About'
import Login from './components/Login/Login'
import Favorites from './components/Favorites/Favorites'
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Backgraund from './components/Backgraund/Backgraund';



function App() {
   let [characters, setCharacters] = React.useState([])
   let [login, setLogin] = React.useState(false)
   let location = useLocation()
   let navigate = useNavigate()

   const handleLogin = (userData) => {
      const miEmail = "hola@gmail.com"
      const miPass = "Hola123"

      if(userData.email == miEmail && userData.password == miPass) {
         setLogin(true)
         navigate("/home")
      }
   }

   const logOut = () => {
      setLogin(false)
   }

   useEffect(() => {
      !login && navigate("/")
   }, [login])

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
       
         <Backgraund>estoy aca</Backgraund>
         {location.pathname != "/" && <Nav logOut={logOut} />}
         {/* {login && <Nav />} */}
         <Routes>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
            <Route path="/" element={<Login handleLogin={handleLogin} />}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} onSearch={onSearch} />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
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
