const cars = [
    {
        model: "malibu",
        mark: "gm",
        price: 22000,
        year: 2018,
        mileage: 64000,
        horsePower: 212
    },
    {
        model: "cobalt",
        mark: "gm",
        price: 11000,
        year: 2023,
        mileage: 4000,
        horsePower: 190
    },
    {
        model: "cls-63",
        mark: "mercedes-benz",
        price: 64000,
        year: 2010,
        mileage: 120000,
        horsePower: 450
    },
    {
        model: "competition",
        mark: "BMW",
        price: 120000,
        year: 2020,
        mileage: 20000,
        horsePower: 520
    },
    {
        model: "k5",
        mark: "kia",
        price: 32000,
        year: 2024,
        mileage: 1000,
        horsePower: 240
    }
];


let from = prompt('ОТ') // 10,000
let up = prompt('ДО') // 24,000

let filtered = cars.filter(car => car.price >= from && car.price <= up)


const selectedModel = prompt('Вот список машин которые мы нашли \n ' + filtered.map(car => car.model + " " + car.mark) + "\n Выберите одно из этих машин написав название ниже").trim().toLowerCase()

const findedCar = cars.find(car => car.model.toLowerCase() === selectedModel)

const agreement = confirm(`
    Ваша машина: ${findedCar.mark} ${findedCar.model}
    Цена: ${findedCar.price}
    Лошадинная сила: ${findedCar.horsePower}

    Вы согласны купить эту машину?
`)

if(agreement === true) {
    alert("Успешно")
} else {
    alert("Увидимся снова")
}

const money = prompt(`Введите сумму покупки цена выбранной машины: ${findedCar.price} долларов:`)


if (money >= findedCar.price) {
    let change = money - findedCar.price;
    alert(`Оплата успешна! ${change > 0 ? `Ваша сдача: ${change} долларов.` : 'Вы внесли ровно нужную сумму.'}`);
} else {
    alert(`Вам не хватает ${findedCar.price - money} долларов.`);
}





const result = cars.reduce((vehicle, car) => {
    if (car.horsePower > vehicle.fastestCar.horsePower) {
        vehicle.fastestCar = car;
    }
    if (car.year > vehicle.youngestCar.year) {
        vehicle.youngestCar = car;
    }
    if (car.mileage > vehicle.mostWornOutCar.mileage) {
        vehicle.mostWornOutCar = car;
    }
    return vehicle;
}, {
    fastestCar: cars[0],
    youngestCar: cars[0],
    mostWornOutCar: cars[0]
});


console.log('Самая быстрая машина:', result.fastestCar);
console.log('Самая молодая машина:', result.youngestCar);
console.log('Самая изношенная машина:', result.mostWornOutCar);
