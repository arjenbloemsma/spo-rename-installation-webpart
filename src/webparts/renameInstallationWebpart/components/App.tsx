import * as React from 'react';
import AddSite from '../containers/AddSite';
import ContainerButton from '../containers/ContainerButton';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import VisibleSiteList from '../containers/VisibleSiteList';

const App = () => (
  <Fabric>
    <AddSite />
    <VisibleSiteList />
    <ContainerButton />
  </Fabric>
);

export default App;
