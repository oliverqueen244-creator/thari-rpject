import { Link } from 'react-router-dom';
import { products } from '../data/products';

function ProductListingPage() {
  return (
    <section>
      <div className="section-heading">
        <h2>Shop</h2>
      </div>
      <div className="product-grid catalog-grid">
        {products.map((product) => (
          <Link className="product-card catalog-card" key={product.id} to={`/shop/${product.id}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductListingPage;
