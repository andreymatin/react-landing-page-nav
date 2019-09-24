import React from 'react';
import BgAnimation from '../particles';

import Header from '../header';
import Nav from '../nav';
import Footer from '../footer';

import Main from '../../pages/Main';
import Details from '../../pages/Details';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>

      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/details/" component={Details} />

        <BgAnimation />
        <Nav />
        <Footer />
      </Router>
    </>
  );
}

export default App;
