import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import MainSection from './sections/Main/MainSection';
import DetailsSection from './sections/Details/DetailsSection';
import ContactsSection from './sections/Contacts/ContactsSection';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainSection />
        </Route>
        <Route path='/details'>
          <DetailsSection />
        </Route>
        <Route path='/contacts'>
          <ContactsSection />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
