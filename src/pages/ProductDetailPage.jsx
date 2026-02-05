import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetailPage() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <section>
        <h2>Product not found</h2>
        <Link className="btn btn-secondary" to="/products">
          Back to Shop
        </Link>
      </section>
    );
  }

  return (
    <section className="pdp-shell">
      <img src={product.image} alt={product.name} className="pdp-image" />
      <div>
        <h2>{product.name}</h2>
        <p className="product-price">{product.price}</p>
        <p className="pdp-copy">{product.description}</p>
        <button className="btn btn-primary" type="button">
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetailPage;
