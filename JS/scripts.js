let pokemonRepository = (function () {
    let pokemonList = [
        {dex: 'dex', name: 'name', gen: 'gen', hp: 'hp', type: ['type', 'type2'], height: 'feet', weight: 'pounds'},
        {dex: 1, name: 'Bulbasaur', gen: 1, hp: 45, types: ['Grass', 'Poison'], height: 2.33, weight: 152},
        {dex: 2, name: 'Ivysaur', gen: 1, hp: 60, types: ['Grass', 'Poison'], height: 3.25, weight: 287},
        {dex: 3, name: 'Venusaur', gen: 1, hp: 80, types: ['Grass', 'Poison'], height: 6.58, weight: 2205},
        {dex: 4, name: 'Charmander', gen: 1, hp: 39, types: ['Fire', ''], height: 2, weight: 187},
        {dex: 5, name: 'Charmeleon', gen: 1, hp: 58, types: ['Fire', ''], height: 3.58, weight: 419},
        {dex: 6, name: 'Charizard', gen: 1, hp: 78, types: ['Fire', 'Flying'], height: 5.58, weight: 1995},
        {dex: 7, name: 'Squirtle', gen: 1, hp: 44, types: ['Water', ''], height: 1.66, weight: 198},
        {dex: 8, name: 'Wartortle', gen: 1, hp: 59, types: ['Water', ''], height: 3.25, weight: 496},
        {dex: 9, name: 'Blastoise', gen: 1, hp: 79, types: ['Water', ''], height: 5.25, weight: 1885},
        {dex: 10, name: 'Caterpie', gen: 1, hp: 45, types: ['Bug', ''], height: 1, weight: 64},
        {dex: 11, name: 'Metapod', gen: 1, hp: 50, types: ['Bug', ''], height: 2.33, weight: 218},
        {dex: 12, name: 'Butterfree', gen: 1, hp: 60, types: ['Bug', 'Flying'], height: 3.58, weight: 705},
        {dex: 13, name: 'Weedle', gen: 1, hp: 40, types: ['Bug', 'Poison'], height: 1, weight: 71},
        {dex: 14, name: 'Kakuna', gen: 1, hp: 45, types: ['Bug', 'Poison'], height: 2, weight: 22},
        {dex: 15, name: 'Beedrill', gen: 1, hp: 65, types: ['Bug', 'Poison'], height: 3.25, weight: 65},
        {dex: 16, name: 'Pidgey', gen: 1, hp: 40, types: ['Normal', 'Flying'], height: 1, weight: 4},
        {dex: 17, name: 'Pidgeotto', gen: 1, hp: 63, types: ['Normal', 'Flying'], height: 3.58, weight: 661},
        {dex: 18, name: 'Pidgeot', gen: 1, hp: 83, types: ['Normal', 'Flying'], height: 4.08, weight: 871},
        {dex: 19, name: 'Rattata', gen: 1, hp: 30, types: ['Normal', ''], height: 1, weight: 77},
        {dex: 20, name: 'Raticate', gen: 1, hp: 55, types: ['Normal', ''], height: 2.33, weight: 408},
        {dex: 21, name: 'Spearow', gen: 1, hp: 40, types: ['Normal', 'Flying'], height: 1, weight: 44},
        {dex: 22, name: 'Fearow', gen: 1, hp: 65, types: ['Normal', 'Flying'], height: 3.08, weight: 838},
        {dex: 23, name: 'Ekans', gen: 1, hp: 30, types: ['Poison', ''], height: 6.58, weight: 152},
        {dex: 24, name: 'Arbok', gen: 1, hp: 60, types: ['Poison', ''], height: 11.5, weight: 1433},
        {dex: 25, name: 'Pikachu', gen: 1, hp: 35, types: ['Electric', ''], height: 1.33, weight: 132},
        {dex: 26, name: 'Raichu', gen: 1, hp: 60, types: ['Electric', ''], height: 2.58, weight: 661},
        {dex: 27, name: 'Sandshrew', gen: 1, hp: 50, types: ['Ground', ''], height: 2, weight: 265},
        {dex: 28, name: 'Sandslash', gen: 1, hp: 75, types: ['Ground', ''], height: 3.25, weight: 65},
        {dex: 29, name: 'Nidoran (Female)', gen: 1, hp: 55, types: ['Poison', ''], height: 1.33, weight: 154},
        {dex: 30, name: 'Nidora', gen: 1, hp: 70, types: ['Poison', ''], height: 2.58, weight: 441},
        {dex: 31, name: 'Nidoqueen', gen: 1, hp: 90, types: ['Poison', 'Ground'], height: 4.25, weight: 1323},
        {dex: 32, name: 'Nidoran (Male)', gen: 1, hp: 46, types: ['Poison', ''], height: 1.66, weight: 198},
        {dex: 33, name: 'Nidoro', gen: 1, hp: 61, types: ['Poison', ''], height: 2.08, weight: 43},
        {dex: 34, name: 'Nidokg', gen: 1, hp: 81, types: ['Poison', 'Ground'], height: 4.58, weight: 1367},
        {dex: 35, name: 'Clefairy', gen: 1, hp: 70, types: ['Fairy', ''], height: 2, weight: 165},
        {dex: 36, name: 'Clefable', gen: 1, hp: 95, types: ['Fairy', ''], height: 4.25, weight: 882},
        {dex: 37, name: 'Vulpix', gen: 1, hp: 38, types: ['Fire', ''], height: 2, weight: 218},
        {dex: 38, name: 'Netales', gen: 1, hp: 73, types: ['Fire', ''], height: 3.58, weight: 439},
        {dex: 39, name: 'Jigglypuff', gen: 1, hp: 115, types: ['Normal', 'Fairy'], height: 1.66, weight: 121},
        {dex: 40, name: 'Wigglytuff', gen: 1, hp: 140, types: ['Normal', 'Fairy'], height: 3.25, weight: 265},
        {dex: 41, name: 'Zubat', gen: 1, hp: 40, types: ['Poison', 'Flying'], height: 2.58, weight: 165},
        {dex: 42, name: 'Golbat', gen: 1, hp: 75, types: ['Poison', 'Flying'], height: 5.25, weight: 1213},
        {dex: 43, name: 'Oddish', gen: 1, hp: 45, types: ['Grass', 'Poison'], height: 1.66, weight: 119},
        {dex: 44, name: 'Gloom', gen: 1, hp: 60, types: ['Grass', 'Poison'], height: 2.58, weight: 19},
        {dex: 45, name: 'Vileplume', gen: 1, hp: 75, types: ['Grass', 'Poison'], height: 3.08, weight: 41},
        {dex: 46, name: 'Paras', gen: 1, hp: 35, types: ['Bug', 'Grass'], height: 1, weight: 119},
        {dex: 47, name: 'Parasect', gen: 1, hp: 60, types: ['Bug', 'Grass'], height: 3.25, weight: 65},
        {dex: 48, name: 'Venonat', gen: 1, hp: 60, types: ['Bug', 'Poison'], height: 3.25, weight: 661},
        {dex: 49, name: 'Venomoth', gen: 1, hp: 70, types: ['Bug', 'Poison'], height: 4.08, weight: 276},
        {dex: 50, name: 'Diglett', gen: 1, hp: 10, types: ['Ground', ''], height: 0.66, weight: 18},
        {dex: 51, name: 'Dugtrio', gen: 1, hp: 35, types: ['Ground', ''], height: 2.33, weight: 734},
        {dex: 52, name: 'Meowth', gen: 1, hp: 40, types: ['Normal', ''], height: 1.33, weight: 93},
        {dex: 53, name: 'Persian', gen: 1, hp: 65, types: ['Normal', ''], height: 3.25, weight: 705},
        {dex: 54, name: 'Psyduck', gen: 1, hp: 50, types: ['Water', ''], height: 2.58, weight: 432},
        {dex: 55, name: 'Golduck', gen: 1, hp: 80, types: ['Water', ''], height: 5.58, weight: 1689},
        {dex: 56, name: 'Mankey', gen: 1, hp: 40, types: ['Fighting', ''], height: 1.66, weight: 617},
        {dex: 57, name: 'Primeape', gen: 1, hp: 65, types: ['Fighting', ''], height: 3.25, weight: 705},
        {dex: 58, name: 'Growlithe', gen: 1, hp: 55, types: ['Fire', ''], height: 2.33, weight: 419},
        {dex: 59, name: 'Arcane', gen: 1, hp: 90, types: ['Fire', ''], height: 6.25, weight: 3417},
        {dex: 60, name: 'Poliwag', gen: 1, hp: 40, types: ['Water', ''], height: 2, weight: 273},
        {dex: 61, name: 'Poliwhirl', gen: 1, hp: 65, types: ['Water', ''], height: 3.25, weight: 441},
        {dex: 62, name: 'Poliwrath', gen: 1, hp: 90, types: ['Water', 'Fighting'], height: 4.25, weight: 119},
        {dex: 63, name: 'Abra', gen: 1, hp: 25, types: ['Psychic', ''], height: 2.08, weight: 43},
        {dex: 64, name: 'Kadabra', gen: 1, hp: 40, types: ['Psychic', ''], height: 4.25, weight: 1246},
        {dex: 65, name: 'Alakazam', gen: 1, hp: 55, types: ['Psychic', ''], height: 4.08, weight: 1058},
        {dex: 66, name: 'Machop', gen: 1, hp: 70, types: ['Fighting', ''], height: 2.58, weight: 43},
        {dex: 67, name: 'Machoke', gen: 1, hp: 80, types: ['Fighting', ''], height: 4.08, weight: 1554},
        {dex: 68, name: 'Machamp', gen: 1, hp: 90, types: ['Fighting', ''], height: 5.25, weight: 2866},
        {dex: 69, name: 'Bellsprout', gen: 1, hp: 50, types: ['Grass', 'Poison'], height: 2.33, weight: 88},
        {dex: 70, name: 'Weepbell', gen: 1, hp: 65, types: ['Grass', 'Poison'], height: 3.25, weight: 141},
        {dex: 71, name: 'Victreebel', gen: 1, hp: 80, types: ['Grass', 'Poison'], height: 5.58, weight: 342},
        {dex: 72, name: 'Tentacool', gen: 1, hp: 40, types: ['Water', 'Poison'], height: 2.08, weight: 1003},
        {dex: 73, name: 'Tentacruel', gen: 1, hp: 80, types: ['Water', 'Poison'], height: 5.25, weight: 1213},
        {dex: 74, name: 'Geodude', gen: 1, hp: 40, types: ['Rock', 'Ground'], height: 1.33, weight: 441},
        {dex: 75, name: 'Graveler', gen: 1, hp: 55, types: ['Rock', 'Ground'], height: 3.25, weight: 2315},
        {dex: 76, name: 'Golem', gen: 1, hp: 80, types: ['Rock', 'Ground'], height: 4.58, weight: 6614},
        {dex: 77, name: 'Ponyta', gen: 1, hp: 50, types: ['Fire', ''], height: 3.25, weight: 661},
        {dex: 78, name: 'Rapidash', gen: 1, hp: 65, types: ['Fire', ''], height: 5.58, weight: 2094},
        {dex: 79, name: 'Slowpoke', gen: 1, hp: 90, types: ['Water', 'Psychic'], height: 3.08, weight: 794},
        {dex: 80, name: 'Slowbro', gen: 1, hp: 95, types: ['Water', 'Psychic'], height: 5.25, weight: 1731},
        {dex: 81, name: 'Magnemite', gen: 1, hp: 25, types: ['Electric', 'Steel'], height: 1, weight: 132},
        {dex: 82, name: 'Magneton', gen: 1, hp: 50, types: ['Electric', 'Steel'], height: 3.25, weight: 1323},
        {dex: 83, name: 'Farfetch\'d', gen: 1, hp: 52, types: ['Normal', 'Flying'], height: 2.58, weight: 331},
        {dex: 84, name: 'Doduo', gen: 1, hp: 35, types: ['Normal', 'Flying'], height: 4.58, weight: 864},
        {dex: 85, name: 'Dodrio', gen: 1, hp: 60, types: ['Normal', 'Flying'], height: 5.08, weight: 1878},
        {dex: 86, name: 'Seel', gen: 1, hp: 65, types: ['Water', ''], height: 3.58, weight: 1984},
        {dex: 87, name: 'Dewgong', gen: 1, hp: 90, types: ['Water', 'Ice'], height: 5.58, weight: 2646},
        {dex: 88, name: 'Grimer', gen: 1, hp: 80, types: ['Poison', ''], height: 2.08, weight: 661},
        {dex: 89, name: 'Muk', gen: 1, hp: 105, types: ['Poison', ''], height: 3.08, weight: 661},
        {dex: 90, name: 'Shellder', gen: 1, hp: 30, types: ['Water', ''], height: 1, weight: 88},
        {dex: 91, name: 'Cloyster', gen: 1, hp: 50, types: ['Water', 'Ice'], height: 4.08, weight: 2921},
        {dex: 92, name: 'Gastly', gen: 1, hp: 30, types: ['Ghost', 'Poison'], height: 4.25, weight: 2},
        {dex: 93, name: 'Haunter', gen: 1, hp: 45, types: ['Ghost', 'Poison'], height: 5.25, weight: 2},
        {dex: 94, name: 'Gengar', gen: 1, hp: 60, types: ['Ghost', 'Poison'], height: 4.08, weight: 893},
        {dex: 95, name: 'Onix', gen: 1, hp: 35, types: ['Rock', 'Ground'], height: 28.83, weight: 463},
        {dex: 96, name: 'Drowzee', gen: 1, hp: 60, types: ['Psychic', ''], height: 3.25, weight: 714},
        {dex: 97, name: 'Hypno', gen: 1, hp: 85, types: ['Psychic', ''], height: 5.25, weight: 1667},
        {dex: 98, name: 'Krabby', gen: 1, hp: 30, types: ['Water', ''], height: 1.33, weight: 143},
        {dex: 99, name: 'Kgler', gen: 1, hp: 55, types: ['Water', ''], height: 4.25, weight: 1323},
        {dex: 100, name: 'Voltorb', gen: 1, hp: 40, types: ['Electric', ''], height: 1.66, weight: 229},
        {dex: 101, name: 'Electrode', gen: 1, hp: 60, types: ['Electric', ''], height: 3.08, weight: 1468},
        {dex: 102, name: 'Exeggcute', gen: 1, hp: 60, types: ['Grass', 'Psychic'], height: 1.33, weight: 55},
        {dex: 103, name: 'Exeggutor', gen: 1, hp: 95, types: ['Grass', 'Psychic'], height: 6.58, weight: 2646},
        {dex: 104, name: 'Cubone', gen: 1, hp: 50, types: ['Ground', ''], height: 1.33, weight: 143},
        {dex: 105, name: 'Marowak', gen: 1, hp: 60, types: ['Ground', ''], height: 3.25, weight: 992},
        {dex: 106, name: 'Hitmonlee', gen: 1, hp: 50, types: ['Fighting', ''], height: 4.08, weight: 1098},
        {dex: 107, name: 'Hitmonchan', gen: 1, hp: 50, types: ['Fighting', ''], height: 4.58, weight: 1107},
        {dex: 108, name: 'Lickitung', gen: 1, hp: 90, types: ['Normal', ''], height: 3.08, weight: 1444},
        {dex: 109, name: 'Koffg', gen: 1, hp: 40, types: ['Poison', ''], height: 2, weight: 22},
        {dex: 110, name: 'Weezg', gen: 1, hp: 65, types: ['Poison', ''], height: 3.08, weight: 209},
        {dex: 111, name: 'Rhyhorn', gen: 1, hp: 80, types: ['Ground', 'Rock'], height: 3.25, weight: 2535},
        {dex: 112, name: 'Rhydon', gen: 1, hp: 105, types: ['Ground', 'Rock'], height: 6.25, weight: 2646},
        {dex: 113, name: 'Chansey', gen: 1, hp: 250, types: ['Normal', ''], height: 3.58, weight: 763},
        {dex: 114, name: 'Tangela', gen: 1, hp: 65, types: ['Grass', ''], height: 3.25, weight: 772},
        {dex: 115, name: 'Kangaskhan', gen: 1, hp: 105, types: ['Normal', ''], height: 7.25, weight: 1764},
        {dex: 116, name: 'Horsea', gen: 1, hp: 30, types: ['Water', ''], height: 1.33, weight: 176},
        {dex: 117, name: 'Seadra', gen: 1, hp: 55, types: ['Water', ''], height: 3.08, weight: 551},
        {dex: 118, name: 'Goldeen', gen: 1, hp: 45, types: ['Water', ''], height: 2, weight: 331},
        {dex: 119, name: 'Seakg', gen: 1, hp: 80, types: ['Water', ''], height: 4.25, weight: 86},
        {dex: 120, name: 'Staryu', gen: 1, hp: 30, types: ['Water', ''], height: 2.58, weight: 761},
        {dex: 121, name: 'Starmie', gen: 1, hp: 60, types: ['Water', 'Psychic'], height: 3.58, weight: 1764},
        {dex: 122, name: 'Mr Mime', gen: 1, hp: 40, types: ['Psychic', 'Fairy'], height: 4.25, weight: 1202},
        {dex: 123, name: 'Scyther', gen: 1, hp: 70, types: ['Bug', 'Flying'], height: 4.08, weight: 1235},
        {dex: 124, name: 'Jynx', gen: 1, hp: 65, types: ['Ice', 'Psychic'], height: 4.58, weight: 895},
        {dex: 125, name: 'Electabuzz', gen: 1, hp: 65, types: ['Electric', ''], height: 3.58, weight: 661},
        {dex: 126, name: 'Magmar', gen: 1, hp: 65, types: ['Fire', ''], height: 4.25, weight: 981},
        {dex: 127, name: 'Psir', gen: 1, hp: 65, types: ['Bug', ''], height: 4.08, weight: 1213},
        {dex: 128, name: 'Tauros', gen: 1, hp: 75, types: ['Normal', ''], height: 4.58, weight: 1949},
        {dex: 129, name: 'Magikarp', gen: 1, hp: 20, types: ['Water', ''], height: 2.08, weight: 22},
        {dex: 130, name: 'Gyarados', gen: 1, hp: 95, types: ['Water', 'Flying'], height: 21.33, weight: 5181},
        {dex: 131, name: 'Lapras', gen: 1, hp: 130, types: ['Water', 'Ice'], height: 8.16, weight: 485},
        {dex: 132, name: 'Ditto', gen: 1, hp: 48, types: ['Normal', ''], height: 1, weight: 88},
        {dex: 133, name: 'Eevee', gen: 1, hp: 55, types: ['Normal', ''], height: 1, weight: 143},
        {dex: 134, name: 'Vaporeon', gen: 1, hp: 130, types: ['Water', ''], height: 3.25, weight: 639},
        {dex: 135, name: 'Jolteon', gen: 1, hp: 65, types: ['Electric', ''], height: 2.58, weight: 54},
        {dex: 136, name: 'Flareon', gen: 1, hp: 65, types: ['Fire', ''], height: 2.08, weight: 551},
        {dex: 137, name: 'Porygon', gen: 1, hp: 65, types: ['Normal', ''], height: 2.58, weight: 805},
        {dex: 138, name: 'Omanyte', gen: 1, hp: 35, types: ['Rock', 'Water'], height: 1.33, weight: 165},
        {dex: 139, name: 'Omastar', gen: 1, hp: 70, types: ['Rock', 'Water'], height: 3.25, weight: 772},
        {dex: 140, name: 'Kabuto', gen: 1, hp: 30, types: ['Rock', 'Water'], height: 1.66, weight: 254},
        {dex: 141, name: 'Kabutops', gen: 1, hp: 60, types: ['Rock', 'Water'], height: 4.25, weight: 893},
        {dex: 142, name: 'Aerodactyl', gen: 1, hp: 80, types: ['Rock', 'Flying'], height: 5.08, weight: 1301},
        {dex: 143, name: 'Snorlax', gen: 1, hp: 160, types: ['Normal', ''], height: 6.08, weight: 10141},
        {dex: 144, name: 'Articuno', gen: 1, hp: 90, types: ['Ice', 'Flying'], height: 5.58, weight: 1221},
        {dex: 145, name: 'Zapdos', gen: 1, hp: 90, types: ['Electric', 'Flying'], height: 5.25, weight: 116},
        {dex: 146, name: 'Moltres', gen: 1, hp: 90, types: ['Fire', 'Flying'], height: 6.58, weight: 1323},
        {dex: 147, name: 'Drati', gen: 1, hp: 41, types: ['Dragon', ''], height: 5.08, weight: 73},
        {dex: 148, name: 'Dragonair', gen: 1, hp: 61, types: ['Dragon', ''], height: 13.08, weight: 364},
        {dex: 149, name: 'Dragonite', gen: 1, hp: 91, types: ['Dragon', 'Flying'], height: 7.25, weight: 463},
        {dex: 150, name: 'Mewtwo', gen: 1, hp: 106, types: ['Psychic', ''], height: 6.58, weight: 269},
        {dex: 151, name: 'Mew', gen: 1, hp: 100, types: ['Psychic', ''], height: 1.33, weight: 88}
];

// add function with typeof parameters
function add(pokemon) {
    if (
        typeof pokemon === "object" &&
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
}

// getEmAll function
function getEmAll() {
    return pokemonList;
}

// add listItem function with button
function addListItem(pokemon) {
    let container = document.querySelector('.container');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button')
    button.innerText = pokemon.name;
    button.classList.add('button-class')
    listPokemon.appendChild(button);
    container.appendChild(listPokemon);   
}


return {
    add:add,
    getEmAll: getEmAll,
    addListItem: addListItem
};
})();

//print all pokemon info
pokemonRepository.getEmAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});

pokemonRepository.add({ name:'Fred', dex: 999, gen: 5, hp: 999, height: 1.6, weight: 99, types: ['Water', 'Fire'] });
console.log(pokemonRepository.getEmAll());
