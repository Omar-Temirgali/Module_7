class Electrics {
    constructor(status, power, voltage) {
        this.status = status,
        this.power = power,
        this.voltage = voltage
    }
    getPower() {
        console.log(`The power is ${this.power}`);
    }
    getVoltage() {
        console.log(`The voltage is ${this.voltage}`);
    }
    getStatus() {
        if (this.status == true) {
            console.log('Turned on');
        } else {
            console.log('Turned off');
        }
    }
}

class Fridge extends Electrics {
    constructor(name, minDegree, power, voltage) {
        super(status, power, voltage);
        this.name = name,
        this.minDegree = minDegree
    }
    getInfo() {
        console.log(`${this.name} fridge with the minimum degree ${this.minDegree}`)
    }
}
const fridge1 = new Fridge('Samsung', -17, 4000, 120);
const fridge2 = new Fridge('Haier', -16, 5000, 90);
fridge1.getInfo();
fridge1.getPower();
fridge1.getVoltage();
fridge1.getStatus();
fridge1.status = true; //turned on the device
fridge1.getStatus();
fridge2.getInfo();
fridge2.getPower();
fridge2.getVoltage();

class Kettle extends Electrics {
    constructor(name, maxVolume, power, voltage) {
        super(status, power, voltage);
        this.name = name,
        this.maxVolume = maxVolume
    }
    getInfo() {
        console.log(`${this.name} kettle with the max volume ${this.maxVolume}`);
    }
}
const kettle1 = new Kettle('Xiaomi', 2.3, 12, 5);
const kettle2 = new Kettle('Redmond', 2, 12, 6);
kettle1.getInfo();
kettle1.getVoltage();
kettle2.getInfo();
kettle2.getStatus();
kettle2.status = true;
kettle2.getStatus();