//Task 0
function getNumbers(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i])) {
            result.push(parseInt(str[i]))
        }
    }
    return result;
}


//Task 1
function findTypes() {
    const obj = {};
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        obj.hasOwnProperty(type) ? obj[type]++ : obj[type] = 1;
    }
    return obj;
}


//Task 2
function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}


//Task 3
function mapArray(arr, callback) {
    let result = [];
    executeforEach(arr, function (el) {
        result.push(callback(el));
    });
    return result;
}

//Task 4
function filterArray(arr, callback) {
    let result = [];
    executeforEach(arr, function (el) {
        if (callback(el)) {
            result.push(el);
        }
    });
    return result;
}


//Task 5
function showFormattedDate(date) {
    const months = ['Jan', 'Fab', 'Mar', 'Apr', 'May',
        'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `Date: ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}


//Task 6
function canConvertToDate(date) {
    return !!Date.parse(date);
}


//Task 7
function daysBetween(date1, date2) {
    const milliseconds = 1000;
    const seconds = 60;
    const minutes = 60;
    const hours = 24;
    return Math.round((date2 - date1) / (milliseconds * seconds * minutes * hours));
}


//Task 8
function getAmountOfAdultPeople(data) {
    const ages = [];
    const days = 365.26;
    const minAge = 18;
    for (let i = 0; i < data.length; i++) {
        ages.push(Math.floor(daysBetween(new Date(data[i]['birthday']), new Date()) / days));
    }
    let result = filterArray(ages, function (el) {
        return el > minAge;
    });
    return result.length;
}


//Task 9
function keys(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}


//Task 10
function values(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }
    return result;
}