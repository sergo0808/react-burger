import React from 'react';
import AppStyles from'./App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import AppMain from '../AppMain/AppMain';

function App() {
  return (
    <div className={AppStyles.app}>
      <AppHeader />
      <AppMain />
      

    </div>
  );
}

export default App;
