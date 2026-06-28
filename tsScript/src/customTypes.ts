type ChaiOrder = {
    type: string;
    sugar: number;
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" && obj !== null && typeof obj.type === "string" && typeof obj.type === "number"
    )
}


function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar}`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = { type: "masala", spicelevel: number }
type GingerChai = { type: "ginger", amount: number }
type ElaichiChai = { type: "elaichichai", aroma: number }

type Chai = MasalaChai | GingerChai | ElaichiChai


function makeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            console.log("Masala Chai");
            break
        case "ginger":
            console.log("Ginger Chai");
            break
        case "elaichichai":
            console.log("Elaichichai Chai");
            break
    }
}

function brew(order: MasalaChai | GingerChai) {
    if ("spicelevel" in order) {
        console.log("Masala chai is ready");

    }
}



// function isStringArray(arr: unknown): arr is string[] {
// }