import Box from "./Box";

class Trainer {
    constructor (name = "Red", pokemon = [], box = new Box()) {
        this.name = name;
        this.pokemon = pokemon;
        this.box = box
    }

    addPokemon (pokemon) {
        if (this.pokemon.length < 6) {
            this.pokemon.push(pokemon)
        } else {
            this.box.addPokemon(pokemon)
        }
    }
}

export default Trainer