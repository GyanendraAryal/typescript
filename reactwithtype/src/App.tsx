import ChaiCard from "./conponents/ChaiCard";
import Counter from "./conponents/Counter";
import "./App.css";
import type { Chai } from "./types";
import ChaiList from "./conponents/ChaiList";
import { OrderForm } from "./conponents/Orderform";
import Card from "./conponents/Card";

const menu: Chai[] = [
  { id: 1, name: "masala", price: 25 },
  { id: 2, name: "ginger", price: 30 },
  { id: 3, name: "lemon", price: 40 },
];

function App() {
  return (
    <>
      <ChaiCard price={800} name={"Headphone"} />
      <ChaiCard price={800} name={"Iphone"} />
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Order placed: ", order.name, order.cups);
          }}
        />
      </div>
      <button type="submit">Place Order</button>

      <div>
        <Card
          title="Chai aur Type"
          footer= {<button>Order Now</button>}
        />
      </div>
    </>
  );
}

export default App;
