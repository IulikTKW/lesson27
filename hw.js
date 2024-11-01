// const obj = {
//     name: 'Alex'
// }

// Object.defineProperties(obj, {
//     age: {
//         value: 20,
//         writable: false,
//         enumerable: true,
//         configurable: true,
//     },
//     city: {
//         value: 'Chisinau',
//         writable: true,
//         configurable: true,
//     },
//     job: {
//         value: 'dev',
//         writable: true,
//         enumerable: true,
//     }
// })

// obj.age = 23

// console.log('1', obj)

// Object.defineProperty(obj, 'job', {
//     configurable: true
// })

// const func = function(arg){
//     console.log(`${arg} ${this.name}`)
// }

// const obj1 = {
//     name: 'Alex'
// }

// const obj2 = {
//     name: 'Victor'
// }

// const obj3 = {
//     name: 'Vasile'
// }

// const bound = func.bind(obj3)

// func.apply(obj1, ['Hey'])
// func.call(obj2, 'Hi')
// bound('Salut')

class Auto {
    constructor(options) {
        this.doors = options.doors
    }
}


class Bus extends Auto {
    constructor(options) {
        super(options)
        this.model = options.model
        this.parcurs = 0
        this.type = 'Bus'
        this.exploatare = 0
    }

    get parcursAuto() {
        return 'Parcursul auto este: ' + this.parcurs + ' Model: ' + this.model + ' exploatare: ' + this.exploatare;
    }

    set parcursAuto({parcursNou, exploatareNou}) {
        this.parcurs = parcursNou
        this.exploatare = exploatareNou
    }
}

const icarus = new Bus({model: 'Icarus', doors: '2'})

console.log(icarus.parcursAuto)

icarus.parcursAuto = { parcursNou: 4500, exploatareNou: 200}

console.log(icarus.parcursAuto)