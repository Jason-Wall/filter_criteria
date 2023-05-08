import React, { Fragment } from 'react';

//Custom Components
import PSDDashboard from './Views/PSDDashboard';
import Nav from './Components/Nav';

//MAIN APPLICATION
export default function App() {
  // State management and functions:

  return (
    <Fragment>
      <Nav />
      <PSDDashboard />
    </Fragment>
  );
}




