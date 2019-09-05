import React from 'react';
import './App.css';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {
  return (
    <>
    <Header />
    <Statistics/>
    <Steps/>
    <About/>
    <Organizations/>
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
            <Link activeClass="active"
      to="steps"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-80}
      duration={500}
      isDynamic={true}
      onSetActive={this.handleSetActive}
      onSetInactive={this.handleSetInactive}
      ignoreCancelEvents={false}
>
  O co chodzi?
</Link>
<Link activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={20}
      duration={500}
      isDynamic={true}
      onSetActive={this.handleSetActive}
      onSetInactive={this.handleSetInactive}
      ignoreCancelEvents={false}
>
  O nas
</Link>
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
      <div className="four-steps" id="steps">
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
      <div className="about" id="about">
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

class Organizations extends React.Component {
  render() {
      return(
          <div className="organizations-wrapper">
              <div className="organizations-select">
                  <h1>Komu pomagamy?</h1>
                  <div className="decoration"></div>
                  <div className="options">
                      <button>Fundacjom</button>
                      <button>Organizacjom pozarządowym</button>
                      <button>Lokalnym zbiórkom</button>
                  <p>W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                  </div>
              </div>
              <div className="organizations-list"></div>
          </div>
      )
  }
}

export default App;


