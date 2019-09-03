import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Header />
  );
}

class Header extends React.Component {
  render () {
    return (
      <section className="container">
      <Navigation/>
      <Buttons/>
      </section>
    )
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <section className="navigation">
        <nav className="login">
          <ul>
            <li><a href="#">Zaloguj</a></li>
            <li><a href="#">Załóż konto</a></li>
          </ul>
        </nav>
        <nav className="menu">
          <ul>
            <li><a href="#">Start</a></li>
            <li><a href="#">O co chodzi?</a></li>
            <li><a href="#">O nas</a></li>
            <li><a href="#">Fundacje i organizacje</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </nav>
      </section>
    )
  }
}

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <div className="content-container">
          <div className="text-container">
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
          </div>
          <div className="decoration"></div>
          <div className="btn-container">
            <button className="btn-left">ODDAJ RZECZY</button>
            <button className="btn-right">ZORGANIZUJ ZBIÓRKĘ</button>
          </div>
        </div>
      </div>
    )
  }
}
export default App;


