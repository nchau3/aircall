import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [isLoading, setIsLoading] = useState(true);
  const [calls, setCalls] = useState([]);
  const [filter, setFilter] = useState("inbox");
  const [refresh, setRefresh] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    axios.get("https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities")
    .then(response => {
      setCalls((response.data).reverse());
      setIsLoading(false);
    })
  }, [refresh]);
  
  const selectFilter = (newFilter) => {
    setFilter(newFilter);
    setSelected("");
  };

  const reload = () => {
    setRefresh(!refresh);
  }

  const filterCalls = (filter, calls) => {
    if (filter === "inbox") {
      return calls.filter(call => !call.is_archived);
    } else if (filter === "archive") {
      return calls.filter(call => call.is_archived);
    } else {
      return calls;
    }
  };

  const dropdown = (call_id) => {
    if (selected !== call_id) {
      setSelected(call_id);
    } else {
      setSelected("");
    }
  };

  return { isLoading, calls, filter, selectFilter, filterCalls, selected, dropdown, reload };
}