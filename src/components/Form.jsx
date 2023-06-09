import { useState } from "react";
import Validation from "./Validation";

const Form = ({login})=>{
    const [userData, setUserData] = useState({
        email: '',
        password: ''
       });
       
    const handleChange = (event)=>{
        setErrors(Validation({
            ...userData,
            [event.target.name]: event.target.value
        })
        )
        setUserData({
          ...userData,
          [event.target.name]: event.target.value
        })
    };
    const [errors, setErrors] = useState({
        
    });

    const handleSubmit = (event)=>{
event.preventDefault()
login(userData)
    };

    return (
        <div>
<form>
<label>Email:</label>
<input 
value={userData.email} 
name='email' 
placeholder='Escribe tu email..' 
type='text' 
onChange={handleChange}/>
   {errors.email ? (<p>{errors.email}</p>): 
   errors.email1 ? (<p>{errors.email1}</p>):
   (<p>{errors.email2}</p>)
   }

<label>Password:</label>
<input 
value={userData.password} 
name='password' 
placeholder='Escribe tu password..' 
type='password'
onChange={handleChange} />
{errors.password ? (<p>{errors.password}</p>) :
(<p>{errors.password1}</p>)
}

    <button onClick={handleSubmit} type="submit">SUBMIT</button>
</form>
        </div>
    )
};
export default Form;