import './App.css';
import Cards from './components/Cards/Cards';
import style from './App.module.css'
import Nav from './components/Nav';
import {useState, useEffect} from 'react'; // DECLARAR ESTADOS LOCALES
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorite from './components/Favorite';
const EMAIL = 'florenciaH@gmail.com';
const PASSWORD = 'SoyHenry2023';


const example=  {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {

   const [characters, setCharacters] = useState([]);
   const {pathname}= useLocation();

   const navigate = useNavigate();
   const [access, setAccess]= useState (false)

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   /*const onSearch = (id)=>{ 
      setCharacters([...characters, example])
   };*/
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) =>{
      setCharacters(
      characters.filter((char) =>{
         return char.id != Number(id) //lo parsea
      })
      )
   };
   return (
      <div className = {style.App}>
         
         {pathname !== '/' && <Nav onSearch={onSearch}/> }
         <Routes>
            
            <Route path='/' element={<Form login={login} />}/>
            <Route path='/home' element={<Cards characters={characters} onClose= {onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/Favorite' element={<Favorite/>}/>
         </Routes>
      </div>
   );
}

export default App;
// useState recibe un estado inicial
// las funciones se crean dentro del componente antes del return
//renderizamos el componente Nav y le pasamos las propiedades de la funcion onSearch que declaramos antes
//useLocation es para saber donde estaba +++ pathname voy a guardar donde esta parado el usuario
