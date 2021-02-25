function Electrics(status, power, voltage) {
    this.status = status,
    this.power = power,
    this.voltage = voltage
}
Electrics.prototype.getPower = function() {
    console.log(`The power is ${this.power}`);
}
Electrics.prototype.getVoltage = function () {
    console.log(`The voltage is ${this.voltage}`);
}
Electrics.prototype.getStatus = function() {
    if (this.status == true) {
        console.log('Turned on');
    } else {
        console.log('Turned off');
    }
}

function Fridge(name, minDegree, power, voltage) {
    this.name = name,
    this.minDegree = minDegree,
    this.power = power,
    this.voltage = voltage
}
Fridge.prototype = new Electrics();
const fridge1 = new Fridge('Samsung', -17, 4000, 120);
const fridge2 = new Fridge('Haier', -16, 5000, 90);

console.log('fridge 1');
fridge1.getPower();
fridge1.getVoltage();
fridge1.getStatus();
fridge1.status = true; //turned on the device
fridge1.getStatus();
console.log('fridge 2');
fridge2.getPower();
fridge2.getVoltage();

function Kettle(name, maxVolume, power, voltage) {
    this.name = name,
    this.maxVolume = maxVolume,
    this.power = power,
    this.voltage = voltage
}
Kettle.prototype = new Electrics();
const kettle1 = new Kettle('Xiaomi', 2.3, 12, 5);
const kettle2 = new Kettle('Redmond', 2, 12, 6);

console.log('kettle 1');
kettle1.getVoltage();
console.log(kettle1.maxVolume);
console.log('kettle 2');
kettle2.getStatus();
kettle2.status = true;
kettle2.getStatus();