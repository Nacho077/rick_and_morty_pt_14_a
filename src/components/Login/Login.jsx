import { useState } from 'react'
import validation from './validation'
import style from './Login.module.css'
import gif from './rick-and-morty-driving.gif'

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
        <div className={style.first}>
           <div className={style.second}>
              <form onSubmit={handleSubmit}>
                  <div>
                    <img src={gif} alt='' className={style.gif}/>
                  </div>
                    <div className={style.formDiv}>
                        
                        <div className={style.inputDiv}>
                           <label className={style.labelText}>EMAIL</label> 
                           <input type="text" value={formState.value} name="email" onChange={handleState} className={style.soloInput} />
                           <p className={style.error}>{formErrors.email}</p>
                        </div>
                        
                        <div className={style.inputDiv}>
                            <label className={style.labelText}>CONTRASEÑA</label>
                            <input type="password" value={formState.password} name="password" onChange={handleState} className={style.soloInput}/>
                            <p className={style.error} >{formErrors.password}</p>
                        </div>    
                        
                    <div  >
                      <button type="submit" className={style.myButton}>LOGEARSE</button>
                    </div>
                  </div>
                 
              </form>

           </div>
        </div>
    )
}

export default Login