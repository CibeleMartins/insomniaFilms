import { useState, useCallback } from 'react';


const useHttp = (resquestConfig, applyData)=> {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    let data = [];
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
    
          // eslint-disable-next-line react-hooks/exhaustive-deps
          data = await response.json();
          setIsLoading(false);
          return {
            isLoading,
            error,
            data,
            sendRequest
          }
        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
      }, [resquestConfig.url]);

      return {
        sendRequest
      }
};

export default useHttp;