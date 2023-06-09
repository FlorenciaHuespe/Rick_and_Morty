const initialState = {
    myFavorites: [],
    allCharactersFav:{}
};

const reducer = (state = initialState, action) =>{
switch (action.type){
    case 'ADD_FAV':
        return {
            ...state,
            myFavorites:[...state.allCharactersFav, action.payload],
            allCharactersFav:[...state.allCharactersFav, action.payload]
    }
    case 'REMOVE_FAV':
        let filterFav= state.myFavorites.filter(fav=> fav.id !== Number(action.payload))
        return{
            ...state, 
            myFavorites: filterFav
        }
        case 'FILTER':
            const filterAllCharacters = state.allCharactersFav.filter((char)=> char.gender === action.payload);
            return{
                ...state,
                myFavorites: filterAllCharacters
            }
            case 'ORDER':
                const allCharactersFavCopy = {...state.allCharactersFav};
                return{
                    ...state,
                    myFavorites: 
                    action.payload === 'A' 
                    ? allCharactersFavCopy.sort((a,b) => a.id - b.id) 
                    : allCharactersFavCopy.sort((a,b) => b.id - a.id)
                }
    default: return {...state}
}
};

export default reducer;

// myFavorites:[...state.myFavorites, action.payload] guardame lo que ya tenias y agregame el nuevo personaje
// payload es un character (es un obj, porque tiene la propiedad id)...ver en action

//let filterFav= state.myFavorites.filter(fav=> fav.id !== Number(action.payload))
                  //  objeto.propiedad.filter (cada character (fav) que esta recorriendo y por cada fav quier ver en su propiedad id que sea diferente a la action.payload (como viene en dato string, debo parsearlo, por eso se pone Number))
