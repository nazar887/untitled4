//Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
let car = {
    model: 'A6',
    brand: 'AUDI',
    year: 2013,
    Vmax: 250,
    engine: '3.0 TFSI',
    drive: function () {
        document.write(`їдемо зі швидкістю ${this.Vmax} на годину <br>`)
    },
    info: function (){
            document.write(`model : ${this.model} <br>`)
            document.write(`brand : ${this.brand} <br>`)
            document.write(`year : ${this.year} <br>`)
            document.write(`max speed is: ${this.Vmax} <br>`)
            document.write(`engine : ${this.engine} <br>`)
    },
    newSpeed(){
    this.Vmax += 30;
    },
    changeYear(){
       this.year += 2;
    },
    driver(name,age,skill){
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
}
car.info();
car.drive();
car.newSpeed();
console.log(car);
car.changeYear();
console.log(car);

//addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//Чомусь не працює, не можу розібратись

class addDriver extends car {
    constructor(name,age,skill,favouriteCar) {
        super(name,age,skill);
    }
}

let andrii = new addDriver('Andrii', 25,'7 years driving','Mercedes');
console.log(andrii);
