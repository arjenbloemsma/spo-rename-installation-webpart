import * as React from 'react';
import AddSite from '../containers/AddSite';
import ContainerButton from '../containers/ContainerButton';
import VisibleSiteList from '../containers/VisibleSiteList';

const App = () => (
  <div>
    <AddSite />
    <VisibleSiteList />
    <ContainerButton />
  </div>
);

export default App;
