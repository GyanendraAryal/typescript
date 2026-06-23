let name: string = 'Ram'
console.log(name);

let price: number = 100
console.log(price);

type myObj = {
    name: string, age: number
    address: {
        temp: string,
        perma: string,
        muni: {
            ward: number,
            tole: string
        }
    }
}

let userOne: myObj = {
    name: "Gyanendra",
    age: 19,
    address: {
        temp: "sainamain",
        perma: "butwal",
        muni: {
            ward: 12,
            tole: "pulchowk"
        }
    }
}
console.log(userOne);


let userListOne: myObj[] = [
    {
    name: "Gyanendra",
    age: 19,
    address: {
        temp: "sainamain",
        perma: "butwal",
        muni: {
            ward: 12,
            tole: "pulchowk"
        }
    }
    },
    {
    name: "Hari bahadur",
    age: 66,
    address: {
        temp: "butwal",
        perma: "sainamain",
        muni: {
            ward: 14,
            tole: "pallo gaun"
        }
    }
}
]


// Tuple
let n: [number, string?] = [10]
console.log(n);

let num: any
console.log(num = [1, 2, 33, 4, 5])
console.log(num = "String")