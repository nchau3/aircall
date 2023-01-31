import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import NavBar from './components/NavBar.jsx';
import ActivityFeed from './components/ActivityFeed.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <NavBar />
      <div className="container-view">
        <ActivityFeed />
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
