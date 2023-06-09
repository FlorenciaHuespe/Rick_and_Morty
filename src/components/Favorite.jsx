import Card from "./Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

const Favorite = (props)=>{
const [aux , setAux] = useState (false);

    const dispatch = useDispatch ();

    const handleOrder = (event) => {
dispatch(orderCards(event.target.value));
setAux(!aux)
    }

    const handlerFilter = (event) => {
dispatch(filterCards(event.target.value))
    }
return(
    <div>
        <select onChange={handleOrder}> 
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        </select>
{       props.myFavorites?.map((props)=>{
        return(
            <Card
            key={props.id}
            id={props.id}
            name={props.name}
            status={props.status}
            species={props.species}
            gender={props.gender}
            origin={props.origin}
            image={props.image}
            onClose={props.onClose}
            />
        )
    })
}
    </div>
)
};
const mapStateToProps = (state)=> {
return{
myFavorites: state.myFavorites
}
};

export default connect (
    mapStateToProps,
    null)(Favorite)
