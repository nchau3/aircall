import React from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './Header.jsx';
import NavBar from './components/NavBar.jsx';
import ActivityFeed from './components/ActivityFeed.jsx';
import LoadingCalls from './components/LoadingCalls.jsx';

//state management
import useApplicationData from './hooks/useApplicationData.js';

const App = () => {
  const { 
    isLoading,
    calls,
    filter,
    selectFilter,
    filterCalls,
    selected,
    dropdown,
    reload
   } = useApplicationData();

  return (
    <div className='container'>
      <Header/>
      <NavBar onClick={selectFilter} selected={filter}/>
      <div className="container-view">
        {isLoading ?
          <LoadingCalls />
          :
          <ActivityFeed 
            calls={filterCalls(filter, calls)}
            filter={filter}
            reload={reload}
            dropdown={dropdown}
            selected={selected}
          />
        }
      </div>
    </div>
  );
};

export default App;
