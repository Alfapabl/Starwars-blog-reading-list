import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"

const Card = (props) => {


    const [infoChar, setInfoChar] = useState([]);

    const {store, actions} = useContext(Context);

    useEffect(() => {	
        fetch(`https://www.swapi.tech/api/people/${props.array.uid}`)
				.then((response)=>response.json())
				.then((resp) => setInfoChar(resp.result))
  }
         
        
    , [])

    const img = `https://starwars-visualguide.com/assets/img/characters/${props.array.uid}.jpg`;
 

    


  return (
    <div className="card mx-2">
      <img height={450} src={img}  className="card-img-top" alt="..." />
      <div className="card" styles="width: 18rem;">
        <h1> {infoChar.properties?.name} </h1>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Gender: {infoChar.properties?.gender}</li>
          <li className="list-group-item">Hair Color: {infoChar.properties?.hair_color}</li>
          <li className="list-group-item">Eye Color: {infoChar.properties?.eye_color}</li>
        </ul>
        <div className="modal-footer">
        <Link to={"/single/" + props.array.uid} > Learn more </Link>
        <button type="button" className="btn btn-primary" onClick={() => {actions.addFavorites(infoChar.properties?.name);}}>Add to Favorites</button>


        </div>
        
      </div>
    </div>
  );
};

export default Card;
