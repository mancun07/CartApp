import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {id: 'p1', title:'Набор Филадельфия', price: 6, description:'Самый популярный набор!'},
  {id: 'p2', title:'Набор Калифорния', price: 16, description:'Самый изысканный набор!'},
  {id: 'p3', title:'Набор Суши Микс', price: 26, description:'Набор для гурманов!'}

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(item => {
          return  <ProductItem key={item.id} id={item.id} price={item.price} description={item.description}
          title={item.title}
        />
        })}

      </ul>
    </section>
  );
};

export default Products;
