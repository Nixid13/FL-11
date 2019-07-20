function Fighter(fighterInfo) {

    let _name = fighterInfo.name;
    let _damage = fighterInfo.damage;
    let _hp = fighterInfo.hp;
    let _maxHp = fighterInfo.hp;
    let _agility = fighterInfo.agility;
    let _wins = 0;
    let _losses = 0;


    this.getName = function () {
        return _name;
    }

    this.getDamage = function () {
        return _damage;
    }

    this.getAgility = function () {
        return _agility;
    }

    this.getHealth = function () {
        return _hp;

    }
    this.attack = function (defender) {
        const maxProbability = 100;
        const hitProbability = maxProbability - defender.getAgility();
        const random = Math.floor(Math.random() * (maxProbability + 1));
        if (random <= hitProbability) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);

        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    this.heal = function (hp) {
        _hp += hp;
        if (_hp > _maxHp) {
            _hp = _maxHp;
        }
    }

    this.dealDamage = function (hp) {
        _hp -= hp;
        if (_hp < 0) {
            _hp = 0;
        }
    }

    this.logCombatHistory = function () {
        console.log(`Name: ${_name}, Wins: ${_wins}, Losses: ${_losses}`);
    }

    this.addWin = function () {
        _wins++;
    }

    this.addLoss = function () {
        _losses++;
    }
}

const fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 40});
const fighter2 = new Fighter({name: 'Jim', damage: 30, hp: 120, agility: 20});

const battle = (fighter1, fighter2) => {
    if (!fighter1.getHealth() || !fighter2.getHealth()) {
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

