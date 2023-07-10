import { useState } from 'react'
import validation from './validation'

const Login = ({handleLogin}) => {
    let [formState, setFormState] = useState({
        email: "",
        password: ""
    })

    let [formErrors, setFormErrors] = useState({})

    const handleState = (e) => {
        let property = e.target.name
        let value = e.target.value

        setFormState({
            ...formState, // spread operator
            [property]: value // bracket notation
        })

        setFormErrors(validation({
            ...formState,
            [property]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(Object.keys(formErrors) == 0) {
            handleLogin(formState)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>EMAIL</label>
            <input type="text" value={formState.value} name="email" onChange={handleState}/>
            <p style={{color: "red"}}>{formErrors.email}</p>
            
            <label>CONTRASEÑA</label>
            <input type="password" value={formState.password} name="password" onChange={handleState}/>
            <p style={{color: "red"}}>{formErrors.password}</p>

            <button type="submit">LOGEARSE</button>
        </form>
    )
}

export default Login