import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ShoppingCartProvider from "./store/cart-context";

function App() {
  return (
    <ShoppingCartProvider>
    <Header />
      <ProductList />
    </ShoppingCartProvider>
  );
}

export default App;
