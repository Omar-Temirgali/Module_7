const employee = {
    workPlace: 'Google',
    state: 'California'
};

const programmer = Object.create(employee);
programmer.name = 'Valeska';
programmer.salary = 7800;
programmer.email = 'valey97@gmail.com';

function print(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

print(programmer);