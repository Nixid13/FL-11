function Hamburger(type, calories, isSecretIngrAdded) {
    let _calories = calories;
    let _cheeseCount = 0;
    let _tomatoCount = 0;
    let _isSecretIngrAdded = false;
    let _wasBit = false;
    let _biteCounter = 0;
    this.type = type;

    this.getCalories = function () {
        return _calories;
    }

    this.setCalories = function (calories) {
        _calories = calories;
    }

    this.addSecretIngredient = function () {
        if (_wasBit) {
            console.log('Sorry, you cant add secret ingredient')
        } else if (!_isSecretIngrAdded && !_cheeseCount && !_tomatoCount) {
            _isSecretIngrAdded = true;
            _calories += 100;
        } else if (_isSecretIngrAdded) {
            console.log('Sorry, you can add secret ingredient only once.')
        } else if (_cheeseCount > 0 || _tomatoCount > 0) {
            console.log('Sorry, you can add secret ingredient only before another ingredient.')
        }
    }

    if (isSecretIngrAdded) {
        this.addSecretIngredient();
    }

    this.bite = function () {
        _wasBit = true;
        _biteCounter++;
    }

    this.addTomato = function () {
        this._addIngredient('tomato', 'twice', 20, 2, _tomatoCount)
    }
    this.addCheese = function () {
        this._addIngredient('cheese', 'once', 120, 1, _cheeseCount)
    }
    this._addIngredient = function (ingredient, times, calories, maxCount, counter) {
        if (_wasBit) {
            console.log(`Sorry, you can\'t add ${ingredient}`);
        } else if (counter < maxCount) {
            ingredient === 'tomato' ? _tomatoCount++ : ingredient === 'cheese' ? _cheeseCount++ : null;
            _calories += calories;
        } else {
            console.log(`Sorry, you can add ${ingredient} only ${times}!`);
        }
    }

    this.info = function () {
        const burgerType = this.type.charAt(0).toUpperCase() + this.type.slice(1);
        const secretIngr = _isSecretIngrAdded ? `with secret ingredient,` : '';
        const cheeseIngr = _cheeseCount > 0 ? ` with cheese,` : ' without cheese,';
        const tomatoIngr = _tomatoCount > 0 ? ` with ${_tomatoCount} tomato,` : '';
        return burgerType + ' hamburger: ' + secretIngr + cheeseIngr + tomatoIngr + ' is bit '
            + _biteCounter + ' times. ' + 'Total calories: ' + _calories;
    }
}


const myHamb = new Hamburger('classic', 600, true);
