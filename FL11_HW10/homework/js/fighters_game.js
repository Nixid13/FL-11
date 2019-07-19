class Fighter {
    constructor(fighterInfo) {
        this._name = fighterInfo.name;
        this._damage = fighterInfo.damage;
        this._hp = fighterInfo.hp;
        this._maxHp = fighterInfo.hp;
        this._agility = fighterInfo.agility;
        this._wins = 0;
        this._losses = 0;
    }

    getName() {
        return this._name;
    }

    getDamage() {
        return this._damage;
    }

    getAgility() {
        return this._agility;
    }

    getHealth() {
        return this._hp;
    }

    attack(defender) {
        const maxProbability = 100;
        const hitProbability = maxProbability - this.getAgility.call(defender);
        const random = Math.floor(Math.random() * (maxProbability + 1));
        if (random <= hitProbability) {
            this.dealDamage.call(defender, this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${this.getName.call(defender)}`);

        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    heal(hp) {
        this._hp += hp;
        if (this._hp > this._maxHp) {
            this._hp = this._maxHp;
        }
    }

    dealDamage(hp) {
        this._hp -= hp;
        if (this._hp < 0) {
            this._hp = 0;
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this._name}, Wins: ${this._wins}, Losses: ${this._losses}`);
    }

    addWin() {
        this._wins++;
    }

    addLoss() {
        this._losses++;
    }
}

const fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 40});
const fighter2 = new Fighter({name: 'Jim', damage: 30, hp: 120, agility: 20});

const battle = (fighter1, fighter2) => {
    if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
        const deadMan = fighter1.getHealth() <= 0 ? fighter1.getName() : fighter2.getName();
        console.log(`${deadMan} is dead and can't fight`);
        return;
    } else {
        while (fighter2.getHealth() > 0 && fighter1.getHealth() > 0) {
            fighter1.attack(fighter2);
            //Prevents fighter2 from dealing one last attack after losing all hp
            if (fighter2.getHealth() <= 0) {
                break;
            }
            fighter2.attack(fighter1);
        }
    }
    const winLose = (winner, loser) => {
        winner.addWin();
        loser.addLoss();
    };

    fighter1.getHealth() <= 0 ? winLose(fighter2, fighter1) : winLose(fighter1, fighter2);

}
