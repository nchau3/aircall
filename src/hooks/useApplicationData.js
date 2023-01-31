import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [isLoading, setIsLoading] = useState(true);
  const [calls, setCalls] = useState([]);
  const [filter, setFilter] = useState("inbox");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get("https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities")
    .then(response => {
      setCalls((response.data).reverse());
      setIsLoading(false);
    })
  }, [refresh]);
  
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
    const newStatus = status ? false : true;
    console.log(`updating status to ${newStatus}`);

    axios.patch(`https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${call_id}`,
     {
      is_archived: newStatus
     })
    .then(response => {
      setTimeout(() => {
        setRefresh(!refresh);
      }, 3000);
      console.log(response.data);
    })
  }

  return { isLoading, calls, filter, selectFilter, filterCalls, archiveCall };
}