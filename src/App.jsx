import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import NavBar from './components/NavBar.jsx';
import ActivityFeed from './components/ActivityFeed.jsx';
import Loading from './components/Loading.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [calls, setCalls] = useState([]);
  const [filter, setFilter] = useState("inbox"); 

  useEffect(() => {
    axios.get("https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities")
    .then(response => {
      setCalls((response.data).reverse());
      setIsLoading(false);
    })
  }, []);

  const filterCalls = (filter, calls) => {
    if (filter === "inbox") {
      return calls.filter(call => !call.is_archived);
    } else if (filter === "archived") {
      return calls.filter(call => call.is_archived);
    } else {
      return calls;
    }
  }

  const selectFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className='container'>
      <Header/>
      <NavBar onClick={selectFilter} selected={filter}/>
      <div className="container-view">
        {isLoading ?
          <Loading />
          :
          <ActivityFeed calls={filterCalls(filter, calls)}/>
        }
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
