// Action creator that returns a function (async operation)
export const fetchData = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_DATA_REQUEST' }); // Indicate loading state
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
  
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: data,  // Dispatch data after API call success
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_DATA_FAILURE',
          error: error.message,  // Dispatch error if API call fails
        });
      }
    };
  };
  