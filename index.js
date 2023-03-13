(async ()=>{
    let pokemons = [];

    await fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            pokemons = data.results;
            pokemons.forEach(pokemon => {
                console.log(pokemon);
            });
        });
    // await console.log(pokemons);
    
})();