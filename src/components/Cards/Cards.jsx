import Card from '../Card/Card';
import style from './Cards.module.css';

const Cards=({characters})=> {
   return (
   <div className={style.contenedor1}>
      {
         characters.map(({id,name,species,gender,origin,status,image})=>{
            return (
               <Card
               Key={id}
               id={id}
               name={name}
               species={species}
               gender={gender}
               origin={origin.name}
               status={status}
               image={image}
               onClose ={() => window.alert('Emulando que se cierra la card')}
               />
            )
         })
      }
   </div>
   )
}
export default  Cards;
