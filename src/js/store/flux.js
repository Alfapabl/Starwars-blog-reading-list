const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],
			info : [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
				.then((response)=>response.json()).
				//.then(data => setStore({ "foo": data.bar }))
				then(data => setStore({characters: data.results}))
										
			
			},

			infoCharacter: (id) => {
				fetch("https://www.swapi.tech/api/people/" + id)
				.then((response)=>response.json())
				.then(data => setStore({info: data.result}))

										
			
			}, 


		



			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.char.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
