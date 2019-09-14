class User {
    constructor(name, orderTotalPrice) {
        this.name = name || 'user';
        this.weekendDiscount = 0;
        this.nightDiscount = 0;
        this.bonus = 0;
        this.orderTotalPrice = orderTotalPrice || 0;
    }

    makeOrder() {
        return `Price after discount and including 
bonuses is ${this.orderTotalPrice - this.weekendDiscount - this.nightDiscount - this.bonus }`;
    }
}

const getDiscount = (user) => {
    const date = new Date();
    if (date.getHours() === 23 || date.getHours() <= 6) {
        user.nightDiscount = 20;
    }

    if (date.getDay() === 0 || date.getDay() === 6) {
        user.weekendDiscount = 5;
    }
}

const setBonus = (user) => {
    user.bonus += Math.floor(user.orderTotalPrice / 100) * 5;
}


const user = new User('John', 100);

