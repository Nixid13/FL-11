function Pokemon() {
    this._wings = false;
    this._type = 'no-type';
    this._specie = 'pocket monster';
}

Pokemon.prototype.getType = function () {
    return this._type;
}
Pokemon.prototype.getSpecie = function () {
    return this._specie;
}
Pokemon.prototype.canFly = function () {
    return this._wings;
}
Pokemon.prototype.getPokemonType = function () {
    return this.constructor.name;
}

function Charmander() {
    Pokemon.call(this);
    this._type = 'Fire';
    this._specie = 'Lizard Pokémon';
}

objectCreator(Charmander, Pokemon);
evolveAdd(Charmander, Charmeleon);

function Charmeleon() {
    Charmander.call(this);
    this._specie = 'Flame Pokémon';
}
objectCreator(Charmeleon, Charmander);
evolveAdd(Charmeleon, Charizard);


function Charizard() {
    Charmeleon.call(this);
    this._wings = true;
}
objectCreator(Charizard, Charmeleon);
evolveAdd(Charizard);



function Pichu() {
    Pokemon.call(this);
    this._type = 'Electric';
    this._specie = 'Mouse Pokémon';
}

objectCreator(Pichu, Pokemon);
evolveAdd(Pichu, Pikachu);

function Pikachu() {
    Pichu.call(this);
}

objectCreator(Pikachu, Pichu);
evolveAdd(Pikachu, Raichu);

function Raichu() {
    Pikachu.call(this);
}

objectCreator(Raichu, Pikachu);
evolveAdd(Raichu);


function objectCreator(object, prot) {
    object.prototype = Object.create(prot.prototype);
    object.prototype.constructor = object;
}

function evolveAdd(oldLevel, NextLevel) {
    oldLevel.prototype.evolve = function () {
        if (NextLevel) {
            return new NextLevel();
        } else {
            return this;
        }
    }
}
