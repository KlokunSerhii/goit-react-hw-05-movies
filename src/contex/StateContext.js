import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [results, setResults] = useState([]);
  const [data, setData] = useState({});
  const [totalPages, setTotalPages] = useState('');
  const [casts, setCasts] = useState([]);
  const [resultsSearch, setResultsSearch] = useState([]);
  const [reviews, setReviews] = useState([]);

  return (
    <Context.Provider
      value={{
        results,
        setResults,
        data,
        setData,
        totalPages,
        setTotalPages,
        casts,
        setCasts,
        resultsSearch,
        setResultsSearch,
        reviews,
        setReviews,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
