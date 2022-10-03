import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {

    const [infoChar, setInfoChar] = useState([]);

    useEffect(() => {	
        fetch("https://www.swapi.tech/api/people/" + props.array.uid.toString())
				.then((response)=>response.json())
				.then((resp) => setInfoChar(resp.result))
  }
         
        
    , [])

    const img = "https://starwars-visualguide.com/assets/img/characters/" + props.array.uid.toString() + ".jpg";
 

    


  return (
    <div className="card">
      <img src={img}  className="card-img-top" alt="..." />
      <div className="card" styles="width: 18rem;">
        <h1> {infoChar.properties?.name} </h1>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Gender: {infoChar.properties?.gender}</li>
          <li className="list-group-item">Hair Color: {infoChar.properties?.hair_color}</li>
          <li className="list-group-item">Eye Color: {infoChar.properties?.eye_color}</li>
        </ul>
        <Link to={"/single/" + props.array.uid} > Learn more </Link>
      </div>
    </div>
  );
};

export default Card;
