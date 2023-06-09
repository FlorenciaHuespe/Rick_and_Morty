import SearchBar from "./SearchBar/SearchBar";
import {Link} from 'react-router-dom';

const Nav = ({onSearch}) => {
    return (
        <div>
             <SearchBar onSearch={onSearch}/>
             
             <Link to='/about'>
             <button>About</button>
             </Link>

             <Link to='/home'>
             <button>Home</button>
             </Link>

             <Link to='/Favorite'>
             <button>Favorites</button>
             </Link>
        </div>
    )
}
export default Nav;

// le pasamos las prop de la funcion onSearch al serchbar
// los eventos van de hijo a padre y las props de padre a hijo