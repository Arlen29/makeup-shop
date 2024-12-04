import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../../components/navbar/Navbar';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import CartPage from '../CartPage/CartPage';
import css from './App.module.css';

function App() {
  return (
    <Router>
      <div className={css.App}>
        <Navbar />
        <Carousel>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
            <p className="legend">Slide 1</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
            <p className="legend">Slide 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
            <p className="legend">Slide 3</p>
          </div>
        </Carousel>
        <Switch>
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/cart" component={CartPage} />
          {/* Otras rutas */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

