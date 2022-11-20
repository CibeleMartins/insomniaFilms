import React, { useState, useCallback } from 'react';


const useHttp2 = (resquestConfig, applyData)=> {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async ()=>  {

        setIsLoading(true);
        setError(null);
        
        try {
          const response = await fetch(
            resquestConfig.url, {
                method: resquestConfig.method ? resquestConfig.method : 'GET',
                headers: resquestConfig.headers ? resquestConfig.headers : {} ,
                body: JSON.stringify(resquestConfig.body) ? JSON.stringify(resquestConfig.body) : null
            }
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
          console.log(data)
          applyData(data)

        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
      }, [resquestConfig.url]);
    
    
      return {
        isLoading,
        error,
        sendRequest
      }
};

export default useHttp2;