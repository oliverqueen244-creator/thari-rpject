function AccountDashboardPage() {
  return (
    <section>
      <h2>Welcome to your account</h2>
      <p className="account-copy">This dashboard is a static Phase-1 placeholder.</p>

      <div className="account-grid">
        <article className="detail-panel">
          <h3>Orders</h3>
          <p>Track your purchases and order updates.</p>
        </article>

        <article className="detail-panel">
          <h3>Addresses</h3>
          <p>Manage delivery and billing addresses.</p>
        </article>

        <article className="detail-panel">
          <h3>Referrals</h3>
          <p>Invite friends and review referral status.</p>
        </article>
      </div>
    </section>
  );
}

export default AccountDashboardPage;
