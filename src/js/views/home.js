import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext"
import Card from "../component/card"




export const Home = () => {

	const {store, actions} = useContext(Context);
	


	return(
		<div className="text-center mt-5">
			<ul>
			{store.characters.map((item)=><li key={item.uid} > <Card array={item}  store={store} actions={actions}/>  </li>)}
			</ul>

		</div>
		);

};

	

	
