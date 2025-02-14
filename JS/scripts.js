let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=180';

/* // add function with typeof parameters
function add(pokemon) {
    let keysNeeded = ['name', 'dex', 'gen', 'hp', 'height', 'weight', 'types'];
    if (
        typeof pokemon === "object" &&
        Object.keys(pokemon).length === keysNeeded.length &&
        "name" in pokemon &&
        "dex" in pokemon &&
        "gen" in pokemon &&
        "hp" in pokemon &&
        "height" in pokemon &&
        "weight" in pokemon &&
        "types" in pokemonList
    ) {
    pokemonList.push(pokemon);
} else {
    console.log("Invalid Entry");
  }
} */

// getEmAll function
function getEmAll() {
    return pokemonList;
}

// add function withOUT typeof parameters
function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
    console.log("Invalid Entry");
  }
}

// add listItem function with button
function addListItem(pokemon) {
    let pokemonList = document.querySelector('.container');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    button.addEventListener('click', function() {
        showDetails(pokemon) ;
    });
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);   
}

function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      console.log('Name: '+pokemon.name+' National Dex #: '+pokemon.id+' Height: '+pokemon.height+' Weight: '+pokemon.weight)
    });
  }

function loadList() {
    return fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            image: item.imageUrl,
            sounds: item.cries,
            types: item.types,
            detailsUrl: item.url
          };
          add(pokemon);
        });
    }).catch(function (e) {
        console.error(e);
    })
}

function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.criesUrl = details.cries.latest;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types.type;
      item.id = details.id;
      item.hp = details.stats.stat;
      item.abilitiesUrl = details.abilities.ability;
    }).catch(function (e) {
      console.error(e);
    });
}

return {
    add:add,
    addListItem:addListItem,
    getEmAll:getEmAll,
    loadList:loadList,
    loadDetails:loadDetails,
    showDetails:showDetails
  } ;
}) ();

//Using Fetch
pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getEmAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });

//print all pokemon info
pokemonRepository.getEmAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});


/* pokemonRepository.add({ name:'Fred', dex: 999, gen: 5, hp: 999, height: 1.6, weight: 99, types: ['Water', 'Fire'] });
console.log(pokemonRepository.getEmAll()); */
