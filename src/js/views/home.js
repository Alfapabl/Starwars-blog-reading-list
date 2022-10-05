import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext"
import Card from "../component/card"
import CardPlanets from "../component/cardPlanets"




export const Home = () => {

	const {store} = useContext(Context);
	


	return(
		<>
		<h1> Characters </h1>
		

		<div className="d-flex mt-5 overflow-auto" styles={{paddingTop: '50px'}}>
			
			{store.characters.map((item)=>
			<div className="col-3 h-50" key={item.uid}> <Card array={item} type="people" />  </div>)}
			

		</div>

		<div className="d-flex mt-5 overflow-auto" styles={{paddingTop: '50px'}}>
			
			{store.characters.map((item)=>
			<div className="col-3 h-50" key={item.uid}> <CardPlanets array={item} type="people" />  </div>)}
			

		</div>


		

		</>
		);

};

	

	
