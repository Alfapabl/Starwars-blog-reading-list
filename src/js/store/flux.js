const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],
			info : [],
			planets : [],
			favorites: [],
					
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

			infoPlanets: (id) => {
				fetch("https://www.swapi.tech/api/planets/" + id)
				.then((response)=>response.json())
				.then(data => setStore({info: data.result}))
													
			},

			addFavorites: (name) => {
				const store = getStore();
				if(store.favorites.includes(name) == false){
				const favoriteTemp = store.favorites.concat(name); 
				setStore({favorites: favoriteTemp});}
				
			},

			deleteFavorite: (favoriteDelete) => {
				const store = getStore();
				let tempFavorite = store.favorites.filter((item)=> item !== favoriteDelete )
				setStore({favorites: tempFavorite});


			},

			

				
		}
	};
};

export default getState;
