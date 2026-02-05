function LoginPage() {
  return (
    <section className="auth-shell">
      <h2>Login</h2>
      <form className="auth-form" action="#">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />

        <button type="button" className="btn btn-primary">
          Login
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
