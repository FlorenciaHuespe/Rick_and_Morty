import style from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar = ({onSearch}) => {
const [id, setId] = useState ('');
const handleChange = (event)=>{ // funcion manejadora
setId (event.target.value)
};
   return (
      <div className={style.contenedor}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={()=>{onSearch(id)}}>Agregar</button>  
      </div>
   );
}
export default SearchBar;

// onChange ante cada cambio
// input es el cuadro donde buscamos las cards, esta escuchando un evento ante cada cambio que realicemos --handleChange
// handleChange esto setea el estado local, lo guarda en (event.target.value) que es todo lo que escribamos en el input, lo guarda y lo mete en el estado local
// el responsable que dispara el evento es el input, en su propiedad target, vamos a sacar la informacion que necesitemos, el value, el cual lo estamos tipeando (id) que tiene la informacion del estado local


