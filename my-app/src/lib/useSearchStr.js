import {  useEffect,useState } from 'react';
const usePresistedState=(initialState,sessionStorageKey)=>{
    const[state,setState]=useState(()=>{
        const prosistedValue = sessionStorage.getItem(sessionStorageKey);
               return prosistedValue ? JSON.parse(prosistedValue) : initialState;
           });

           useEffect(() => {
            sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
                 }, [state, sessionStorageKey])
    return [state,setState]
}



export const useSearchStr=()=>{
   return usePresistedState('','searchString')
}