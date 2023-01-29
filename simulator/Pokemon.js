import { Ditto } from "./Species";

class Pokemon {
    constructor(level, species = new Ditto) {
        this.level = level;
        this.species = species;
    }
}

export default Pokemon