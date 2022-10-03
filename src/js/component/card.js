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
 

    


 




  return (
    <div className="card" styles="width: 18rem;">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card" styles="width: 18rem;">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{infoChar.properties?.name}</li>
          <li className="list-group-item">{infoChar.properties?.hair_color}</li>
          <li className="list-group-item">{infoChar.properties?.eye_color}</li>
        </ul>
        <Link to={"/single/" + props.array.uid} > Learn more </Link>
      </div>
    </div>
  );
};

export default Card;
