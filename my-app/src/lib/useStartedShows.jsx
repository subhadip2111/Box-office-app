import { useReducer, useEffect } from 'react';

const usePersisterReducer = (reducer, initialState, localStorageKey) => {
    const [state, dispath] = useReducer(reducer, initialState, initial => {
      const prosistedValue = sessionStorage.getItem(localStorageKey);
      return prosistedValue ? JSON.parse(prosistedValue) : initial;
    });
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state, localStorageKey]);
    return [state, dispath];
  }


  const startShowReducer = (currentStarted, action) => {
    switch (action.type) {
      case 'STAR':
        return currentStarted.concat(action.showId);

      case 'UNSTAR':
        return currentStarted.filter(showId => showId !== action.showId);
      default:
        return currentStarted;
    }
  };

  export  const useStartShows=()=>{
    return usePersisterReducer(startShowReducer,[],"startShow")
   }