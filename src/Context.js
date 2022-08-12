import React, { useState } from "react";
  
export const Context = React.createContext();
//context should be provided to all the children inside the component tree
export const ContextProvider = ({ children }) => {
    //creating global context for jobs
    const [jobs_array, setJobs_array] = useState([]);
  
    return (
        <Context.Provider value={{ jobs_array, setJobs_array }}>
            {children}
        </Context.Provider>
    );
};