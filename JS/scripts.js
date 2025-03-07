// Repository call IIFE Function
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=180';
    let modalContainer = document.querySelector('#modal-container');

    // add function
    function add(pokemon) {
      pokemonList.push(pokemon)
    }

    function getEmAll() {
      return pokemonList;
    }

    function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listItem = document.createElement("li");
      listItem.classList.add("list-group-item");

      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("btn", "btn-primary");

      listItem.appendChild(button);
      pokemonList.appendChild(listItem);
      button.addEventListener("click", function(event) {
        pokemonRepository.showDetails(pokemon);
      });
    }



    // add listItem function with button
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');

        button.innerText = pokemon.name;
        button.classList.add("btn");

        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);

        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
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
            item.imageUrl = details.sprites.other["official-artwork"].front_default;
            item.criesUrl = details.cries.latest;
            item.stage = details.species;
            item.height = details.height;
            item.weight = details.weight;
            item.types = details.types.type;
            item.id = details.id;
            item.hp = details.stats.stat;
            item.abilities = details.abilities.name;
            item.abilities2 = details.abilities.name;
        }).catch(function (e) {
            console.error(e);
        });
    }

    //show modal content
    function showModal(item) {
        let modalHeader = $(".modal-header");
        let modalBody = $(".modal-body");
        let modalFooter = $(".modal-footer");
        let modalContainer = $("#modal-container-fluid");

        //clear existing modal content
        modalHeader.empty();
        modalBody.empty();
        modalFooter.empty();

        //creating element for STAGE in model content
        let stageElement = $("<h5>" + item.stage + "</h5>");
        //creating element for NAME in model content
        let nameElement = $("<h2>" + item.name + "</h2>");
        //creating element for HP in model content
        let hpElement = $("<h4> <small>HP </small>" + item.hp + "</h4>");
        //creating element for TYPE IMG in model content
        let elementElement = $('<img class="">');
        //creating element for IMAGE in model content
        let imageElement = $('<img class="modal-img" style="width:50%">');
        imageElement.attr("src", item.imageUrl)
        //creating element for BLANK in model content
        let blankElement = $("<br></br>");
        //creating element for ID in model content
        let idElement = $("<h5> No. " + item.id + "</h5>");
        //creating element for HEIGHT in model content
        let heightElement = $("<h5>" + item.height + "</h5>");
        //creating element for WEIGHT in model content
        let weightElement = $("<h5>" + item.weight + "</h5>");
        //creating element for ABILITY in model content
        let abilityElement = $("<h3>" + item.ability + "</h3>");
        //creating element for ABILITY 2 in model content
        let ability2Element = $("<h3>" + item.ability2 + "</h3>");
        
        modalHeader.append(stageElement);
        modalHeader.append(nameElement);
        modalHeader.append(hpElement);
        modalHeader.append(elementElement);
        modalBody.append(imageElement);
        modalBody.append(blankElement);
        modalBody.append(idElement);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalFooter.append(abilityElement);
        modalFooter.append(ability2Element);
    }
    
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
            $("#modal-container-fluid").modal('show');
        });
    }
    
    return {
        add: add,
        addListItem: addListItem,
        getEmAll: getEmAll,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal
    };
})();
//End Repository IIFE

//Using Fetch
pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getEmAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

//print all pokemon info
pokemonRepository.getEmAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});

