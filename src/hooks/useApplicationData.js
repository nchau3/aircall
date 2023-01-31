import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
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
  
  const selectFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const filterCalls = (filter, calls) => {
    if (filter === "inbox") {
      return calls.filter(call => !call.is_archived);
    } else if (filter === "archived") {
      return calls.filter(call => call.is_archived);
    } else {
      return calls;
    }
  };

  const archiveCall = (call_id, status) => {
    axios.patch(`https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${call_id}`,
     {
      is_archived: !status
     })
    .then(response => {
      console.log(response);
    })
  }

  return { isLoading, calls, filter, selectFilter, filterCalls, archiveCall };
}