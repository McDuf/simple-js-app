// Repository call IIFE Function
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=180';
    let modalContainer = document.querySelector('#modal-container');

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
        pokemonList.push(pokemon)
    }

    // add listItem function with button
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
    }

    function showDetails(pokemon) {
        showModal(pokemon);
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

    function showModal(title, img, details) {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
            modal.classList.add('modal');
            let closeButton = document.createElement('button');

            closeButton.classList.add('modal-close');
            closeButton.innerText = 'Close';
            closeButton.addEventListener('click', hideModal);
      
            let pokemonName = document.createElement('h1');
            pokemonName.classList.add('modal-top');
            pokemonName.innerText = title;

            let pokemonHp = document.createElement('li');
            pokemonHp.classList.add('modal-top.li');
           
            let pokemonHeight = document.createElement('p');
            pokemonHeight.classList.add('modal-deatils');
            pokemonHeight.innerText = details;

            let pokemonImage = document.createElement('img');
            pokemonImage.classList.add('modal-img');

            pokemonImage.setAttribute('src', img);
            pokemonImage.setAttribute('width', '100%');
            pokemonImage.setAttribute('height', '100%');
      
            modal.appendChild(closeButton);
            modal.appendChild(pokemonName);
            modal.appendChild(pokemonImage);
            modal.appendChild(pokemonHeight);
            modal.appendChild(pokemonHp);
            modalContainer.appendChild(modal);
        
        modalContainer.classList.add('is-visible');

        window.addEventListener('click', (e) => {
            if (e.target != modalContainer) {
                hideModal();
            }
        })


        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                hideModal();
            }
        })

        document.body.style.overflow ='hidden';
    }

    function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
    }
    
    function showDetails(pokemon) {
        loadList(pokemon).then(function () {
        loadDetails(pokemon).then(function () {
            showModal(pokemon.name, pokemon.imageUrl, 'Height: '+ pokemon.height + ' ' +'  Weight: ' + pokemon.weight);
        });
        });
    }
    

    return {
        add: add,
        addListItem: addListItem,
        getEmAll: getEmAll,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
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

/*/Start Modal
(function() {
  let modalContainer = document.querySelector('#modal-container');
  let dialogPromiseReject;

  function showModal(title, text) {
//clear all existing data
    modalContainer.innerHTML='';

    let modal = document.createElement('div');
    modal.classList.add('modal');

// Add modal content
// Add close button functionality
let closeButton = document.createElement('button');
closeButton.classList.add('modal-close');
closeButton.innerText = 'X close';
closeButton.addEventListener('click', hideModal);

let titleElement = document.createElement('h1');
titleElement.innerText= title;

let contentElement = document.createElement('p');
contentElement.innerText = text;

modal.appendChild(closeButton);
modal.appendChild(titleElement);
modal.appendChild(contentElement);
modalContainer.appendChild(modal);

modalContainer.classList.add('is-visible');
}

// To Close Modal
function hideModal() {
  modalContainer.classList.remove('is-visible');

  if(dialogPromiseReject) {
    dialogPromiseReject();
    dialogPromiseReject = null;
  }
}

// Start Dialog
function showDialog(title, text) {
  showModal(title, text);

// Add confirm and cancel buttons to Modal
  let modal = modalContainer.querySelector('.modal');

  let confirmButton = document.createElement('button');
  confirmButton.classList.add('modal-confirm');
  confirmButton.innerText = 'Confirm';
  
  let cancelButton = document.createElement('button');
  cancelButton.classList.add('modal-cancel');
  cancelButton.innerText = 'Cancel';
  
  modal.appendChild(confirmButton);
  modal.appendChild(cancelButton);
  
  //To focus on confirm button for hitting 'Enter'
  confirmButton.focus();
  
  //Return a promise of showDialog function
  return new Promise((resolve,reject) => {
    cancelButton.addEventListener('click', hideModal);
    confirmButton.addEventListener('click', () => {
      dialogPromiseReject = null;
      hideModal();
      resolve();
  });

    dialogPromiseReject = reject;
  });
}

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal('Modal Title', 'This is Modal Content');
});

//Adding asynchronous functionality to button with a promise
document.querySelector('#show-dialog').addEventListener('click', () => {
  showDialog('Confirm?', 'Are you sure you want to do that?').then(function() {
    alert('Confirmed!');
    }, () => {
      alert('DE-NIED!');
    });
});

// Add Escape key functionality
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

// Add close on click outside of Modal
modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});
})();
//End Modal/Dialog */
