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
        <Route exact path='/visit-card-example'>
          <MainSection />
        </Route>
        <Route path='/visit-card-example/details'>
          <DetailsSection />
        </Route>
        <Route path='/visit-card-example/contacts'>
          <ContactsSection />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
