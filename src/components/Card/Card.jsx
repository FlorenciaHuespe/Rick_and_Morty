//import style from './Card.module.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {addFav, removeFav } from '../../redux/actions';
import {useState, useEffect} from 'react';

const Card = (props) => {
const [isFav, setIsFav] = useState (false);

const {addFav, removeFav} = props;

const handleFavorite = (event)=>{
isFav ? removeFav(props.id) : addFav (props);
setIsFav (!isFav)
}

useEffect(() => {
   props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [props.myFavorites]);

   return (
      <div className='cards'>
         {(<button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'} </button>) 
}
         <button onClick={()=> {props.onClose(props.id)}}>Cerrar</button>
         <Link to={`/detail/${props.id}`}>
         <div className=' face front'>
         <img src={props.image} alt='' /> 
         </div>
         <div className='face back'>
         <h2>Name: {props.name}</h2>
         <h2>Status: {props.status}</h2>
         <h2>Species: {props.especie}</h2>
         <h2>Gender: {props.género}</h2>
         <h2>Origin{props.origin}</h2>
      
         </div>

         </Link>
      </div>
   );
}
const mapStateToProps = (state)=> {
return {
   myFavorites: state.myFavorites
}
}

const mapDispatchToProps = (dispatch) =>{
   return{
addFav: (character) => dispatch (addFav(character)),
removeFav: (id) => dispatch (removeFav(id))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps)(Card)



   //addFav: (character) => dispatch (addFav(character)) cuando declaramos la funcion addFav, le dijimos que iba a estar esperando un character para pasarselo por payload- lorecibe por parametro y se lo pasa a la action....al igual el id
   //isFav ? removeFav(props.id) : addFav (props);
   //si es true - despachamos removeFav y espera que le pasemos el id el else son los 2 puntos : , donde va a setear el estado y le pasamos las props que necesita

   //   isFav ? (
    //   <button onClick={handleFavorite}>❤️</button>
   // ) : (
    //   <button onClick={handleFavorite}>🤍</button>
   // )
   //si da true, mostras el corazon rojo, si da false el bco

   
   //<button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'} </button>) 