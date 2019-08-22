//Task 1
const array = [1, 345, 24, 12, 67456, 12, 445];
const maxElement = array => Math.max(...array);

//Task 2
const copyArray = array => {
    const [...copy] = array;
    return copy;
}


//Task 3
const object = {name: 333};

const addUniqueId = obj => {
    const id = Symbol('id');
    const {...copy} = obj;
    copy[id] = Math.floor(Math.random() * 999);
    return copy;

}


//Task 4

const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'Univer'}}
const regroupObject = obj => {
    const {name: firstName, details} = obj;
    const {id, age, university} = details;
    return {university, user: {age, firstName, id}}
}

console.log(regroupObject(oldObj))



//Task 5
const array2 = [1,1,3,13,4,5,67,77,67,1,13,4,5];
const findUniqueElements = array => [...new Set(array)];


//Task 6
const num = '12345678912345';
const hideNumber = phoneNumber => phoneNumber.slice(-4).padStart(phoneNumber.length, '*');


//Task 7
const required = () => {
    throw new Error('Missing property')
};
const add = (a, b = required()) => a + b;


//Task 8
const getData = url => {
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.map(el => el.name).sort();
        })
        .catch(error => console.error('Error:', error));
}

getData('https://jsonplaceholder.typicode.com/users').then(arr => console.log(arr));


//Task 9
async function getData2(url) {
    try {
        const request = await fetch(url);
        const response = await request.json();
        return response.map(el => el.name).sort();
    }
    catch (e) {
        console.error('Error:', e)
    }
}

getData2('https://jsonplaceholder.typicode.com/users').then(arr => console.log(arr));

