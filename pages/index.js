import Head from 'next/head';
import React from 'react';
import Menu from '../components/menu'


function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Origins Next</title>
      </Head>

      <main>
        <section className="login-section">
          <div className="title-container">
            <h1>Welcome!</h1>
          </div>
          <div className="input-container">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              Login
            </button>
          </div>

          <div className="logo-container">
            <h1 className="origins-logo">ORIGINS</h1>
          </div>

          <a href="./register.html" className="create-account-link">
            Create Account
          </a>
        </section>

        <section className="ademiro-login-section">
          <div className="title-container">
            <h1>Login Ademiro</h1>
          </div>

          <div className="input-container">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
          </div>
          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              Login
            </button>
          </div>
        </section>
      </main>
      <footer>
        <nav className="menu">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#">Heroes</a>
            </li>
            <li>
              <a href="#">Relatório</a>
            </li>
            <li>
              <a href="#">Admin</a>
            </li>
          </ul>
        </nav>
        <Menu />
      </footer>
    </div>
  );
}

export default Home;
