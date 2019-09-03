import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <Statistics/>
    <Steps/>
    <About/>
    </>
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
            <li><button>Zaloguj</button></li>
            <li><button>Załóż konto</button></li>
          </ul>
        </nav>
        <nav className="menu">
          <ul>
            <li><button>Start</button></li>
            <li><button>O co chodzi?</button></li>
            <li><button>O nas</button></li>
            <li><button>Fundacje i organizacje</button></li>
            <li><button>Kontakt</button></li>
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

class Statistics extends React.Component {
  render() {
    return (
      <section className="statistics">
      <div className="statistics-container">
        <div className="sent">
          <h1>10</h1>
          <h3>ODDANYCH WORKÓW</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus a repellat quia aperiam quod deleniti!</p>
        </div>
        <div className="support">
        <h1>5</h1>
          <h3>WSPARTYCH ORGANIZACJI</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus a repellat quia aperiam quod deleniti!</p>
        </div>
        <div className="giveaway">
        <h1>7</h1>
          <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus a repellat quia aperiam quod deleniti!</p>
        </div>
      </div>
      </section>
    )
  }
}

class Steps extends React.Component {
  render() {
    return (
      <div className="four-steps">
        <div className="four-steps-inner-container">
          <h1>Wystarczą 4 proste kroki</h1>
          <div className="decoration"></div>
          <div className="steps">
            <div className="step">
            <i class="fa fa-check"></i>
              <p>Wybierz rzeczy</p>
              <hr></hr>
              <p>ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className="step">
              <i class="fa fa-arrow-down"></i>
              <p>Spakuj je</p>
              <hr></hr>
              <p>skorzystaj z worków na śmieci</p>
            </div>
            <div className="step">
              <i class="fa fa-binoculars"></i>
              <p>Zdecyduj komu chcesz pomóc</p>
              <hr></hr>
              <p>wybierz zaufane miejsce</p>
            </div>
            <div className="step">
            <i class="fa fa-user"></i>
              <p>Zamów kuriera</p>
              <hr></hr>
              <p>kurier przyjedzie w dogodnym terminie</p>
            </div>
          </div>
        <button className="register-btn">ZAŁÓŻ KONTO</button>
        </div>
      </div>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about-text">
          <p>O nas</p>
          <div className="decoration"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente mollitia itaque laborum, omnis sequi possimus velit ad repellendus corrupti!</p>
        </div>
        <div className="about-image"></div>
      </div>
    )
  }
}

export default App;


