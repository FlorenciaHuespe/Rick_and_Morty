export default (data)=>{

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

let errors = {};

if (!regexEmail.test(data.email)) {
    errors.email = "Debe ser un correo electrónico"
}
if(!data.email){
    errors.email1 = "Ingrese un Email"
}
if(data.email.length >35){
    errors.email2 = "El usuario no puede tener más de 35 caracteres"
}
if(!/\d/.test(data.password)){
 errors.password = "Al menos debe tener un numero"
}
if (data.password.length < 6 || data.password.length > 10 ){
    errors.password1 = "Longitud incorrecta"
} 
return errors
};
