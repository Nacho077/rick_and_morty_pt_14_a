export default (state) => {
    let errors = {}

    //     EMAIL
    // el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
    // el nombre de usuario no puede estar vacío.
    // el nombre de usuario no puede tener más de 35 caracteres.
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i;
    // ^ => tiene que empezar con
    // [A-Z0-9_.%+-] => A-Za-z 
    // + => por lo menos 1 o mas
    // * => tiene que haber 0 o mas
    // @[A-Z0-9.-]+ => @bla
    // \.[A-Z]{3,4} => .a-z
    // $ => tiene que terminar con
    const regexEmail2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/
    // \w => A-Za-z0-9

    if(state.email.length > 35 || state.email.length == 0) {
        errors.email = "No tiene el largo necesario"
    } else if(!regexEmail.test(state.email)) {
        errors.email = "No cumple la regex"
    }

    // PASSWORD
    // la contraseña tiene que tener al menos un número.
    // la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;
    if(state.password.length < 6 || state.password.length > 10) {
        errors.password = "No tiene la longitud necesaria"
    }else if(!regexPassword.test(state.password)) {
        errors.password = "No tiene los caracteres correctos"
    }

    return errors
}