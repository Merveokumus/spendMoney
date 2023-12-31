import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import products from "./products.json";
import Product from "./components/Product";
import Basket from "./components/Basket";
import { moneyFormat } from "./Helpers";

function App() {
  const [money, setMoney] = useState(1000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState();
  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />.
      <div className="container products">
        {products.map((product) => (
          <Product
            key={product.id}
            basket={basket}
            setBasket={setBasket}
            product={product}
            total={total}
            money={money}
          />
        ))}
      </div>
      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          products={products}
          basket={basket}
          total={total}
        />
      )}
    </>
  );
}

export default App;
