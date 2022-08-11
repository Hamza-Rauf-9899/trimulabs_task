import React, { useState } from "react";
  
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [jobs_array, setJobs_array] = useState([]);
  
    return (
        <Context.Provider value={{ jobs_array, setJobs_array }}>
            {children}
        </Context.Provider>
    );
};