const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Phillip' }
        user['lastName'] = 'Ngo';
        return user
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'There was an error')
}

const reverseString = str => {
    return str.toLowerCase().split('').reverse().join('');
}

const isAnagram = (str1, str2) => {
    return formatString(str1) === formatString(str2)
}

function formatString(str){
    return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = { functions, reverseString, isAnagram };