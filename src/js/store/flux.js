const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],
			info : [],
			planets : [],
		
			
		},
		actions: {
	
			
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
				.then((response)=>response.json()).
				then(data => setStore({characters: data.results}))

										
			
			},

			infoCharacter: (id) => {
				fetch("https://www.swapi.tech/api/people/" + id)
				.then((response)=>response.json())
				.then(data => setStore({info: data.result}))
													
			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then((response)=>response.json()).
				then(data => setStore({planets: data.results}))
				
										
			
			},

			

				
		}
	};
};

export default getState;
