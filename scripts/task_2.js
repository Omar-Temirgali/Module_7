const employee = {
    workPlace: 'Google',
    state: 'California'
};

// let companyName = 'Microsoft';
let companyName = 'Google';
// let companyName = 'Twitter';

function check(str, obj) {
    for (let key in obj) {
        if (str === obj[key]) {
            return true;
            break;
        } else {
            return false;
        }
    }
}

if (check(companyName, employee)) {
    console.log('YES');
} else {
    console.log('NO');
}