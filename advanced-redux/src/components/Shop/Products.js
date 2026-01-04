import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'My First Book',
    price: 16,    
    description: 'This is a first product - amazing!'
  },
  {
    id: 'p2',
    title: 'My Second Book',
    price: 26,
    description: 'This is a second product - awesome!'
  },
  {
    id: 'p3',
    title: 'My Third Book',
    price: 36,
    description: 'This is a third product - incredible!'
  },
  {
    id: 'p4',
    title: 'My Fourth Book',
    price: 46,   
    description: 'This is a fourth product - fantastic!'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          key={product.id}
          product={product}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
