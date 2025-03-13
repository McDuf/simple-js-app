let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=180';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getEmAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonListElement = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("btn", "btn-primary", "pokemon-button"); // Added pokemon-button class

        listItem.append(button);
        pokemonListElement.append(listItem);
        button.addEventListener("click", function (event) {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url,
                    };
                    add(pokemon);
                });
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;

        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (details) {
                item.imageUrl = details.sprites.other["official-artwork"].front_default;
                item.criesUrl = details.cries.latest;
                item.stage = details.species.name;
                item.height = details.height;
                item.weight = details.weight;
                item.types = details.types.map((type) => type.type.name);
                item.id = details.id;
                item.hp = details.stats.find((stat) => stat.stat.name === 'hp').base_stat;
                item.abilities = details.abilities.map((ability) => ability.ability.name);
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function showModal(item) {
        let modalContent = document.querySelector("#modal-content");

        let modalTitle = document.querySelector(".modal-title");
        let modalHeader = document.querySelector(".modal-header");
        let modalBody = document.querySelector(".modal-body");
        let modalFooter = document.querySelector(".modal-footer");

        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalTitle.innerHTML = '';
        modalHeader.innerHTML = '';
        modalBody.innerHTML = '';
        modalFooter.innerHTML = '';

        let closeButton = document.createElement("button");
        closeButton.classList.add("close");
        closeButton.innerHTML = '&times';
        

        let stageElement = document.createElement("sup");
        stageElement.innerHTML = '<h1>' + 'basic' + '</h1>';

        let nameElement = document.createElement("h3");
        nameElement.innerText = item.name;

        let hpElement = document.createElement("h4");
        hpElement.innerHTML = "<small>HP </small>" + item.hp;

        let imageElement = document.createElement("img");
        imageElement.classList.add("modal-img");

        imageElement.src = item.imageUrl;

        let idElement = document.createElement("sub");
        idElement.innerText = 'NO. ' + item.id + '  ';

        let typeElement = document.createElement("sub");
        typeElement.innerText = item.types + '';

        let heightElement = document.createElement("sub");
        heightElement.innerText = ' HT: ' + item.height + '" ' + '  ';

        let weightElement = document.createElement("sub");
        weightElement.innerText = ' WT: ' + item.weight + 'lbs ';

        let abilitiesElement = document.createElement("div");
        item.abilities.forEach((ability) => {
            let abilityItem = document.createElement("h4");
            abilityItem.innerText = ability;
            abilitiesElement.appendChild(abilityItem);
        });
        
        modalHeader.appendChild(stageElement);
        modalHeader.appendChild(nameElement);
        modalHeader.appendChild(hpElement);
        modalBody.appendChild(imageElement);
        modalBody.appendChild(idElement);
        modalBody.appendChild(typeElement);
        modalBody.appendChild(heightElement);
        modalBody.appendChild(weightElement);
        modalFooter.appendChild(abilitiesElement);
        modalTitle.appendChild(closeButton); 

    window.addEventListener("click", (e) => {
        if (e.target != modalContent) {
        hideModal();
        }
    })
}
    function hideModal(pokemon) {
        $("#modal-container").modal('hide');
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
            $("#modal-container").modal('show');
        });
    }
    
    return {
        add: add,
        addListItem: addListItem,
        getEmAll: getEmAll,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
        hideModal: hideModal
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getEmAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

