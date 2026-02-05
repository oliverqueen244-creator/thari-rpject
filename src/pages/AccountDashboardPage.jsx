function AccountDashboardPage() {
  return (
    <section>
      <h2>Welcome to your account</h2>
      <p className="account-copy">This is a Phase-1 static account overview.</p>

      <div className="account-grid">
        <article className="detail-panel">
          <h3>My Orders</h3>
          <p>View your recent orders and order summaries.</p>
        </article>

        <article className="detail-panel">
          <h3>Saved Addresses</h3>
          <p>Manage your saved delivery and billing addresses.</p>
        </article>

        <article className="detail-panel">
          <h3>Referrals</h3>
          <p>Track referral activity and available invite benefits.</p>
        </article>
      </div>
    </section>
  );
}

export default AccountDashboardPage;
