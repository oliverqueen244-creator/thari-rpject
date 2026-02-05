import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <section className="hero editorial-hero">
      <p className="eyebrow">THARI</p>
      <h1 className="hero-title">THARI</h1>
      <p className="hero-subheading">Relaxed tailoring for modern living</p>
      <div className="hero-actions">
        <Link className="btn btn-primary" to="/shop">
          Shop Collection
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
