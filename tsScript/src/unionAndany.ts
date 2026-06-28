// Type Union

// let subs: number | string = 10
// let subs: = "1M"

let apiResponseStatus: "pending" | "success" | "failed" = "pending"

apiResponseStatus = "success"


let airlineSeat: "aisle" | "window" | "middle" = "middle"


const orders = ["12", "13", "14", "18"]
let currentOrder: string | undefined; //should define fallback type undedined or any if in case the value is not computed yet


for (let order of orders) {
    if (order === "12") {
        currentOrder = order
        break
    }
}

console.log(currentOrder);
