import { fetchData } from './actions';
import { useDispatch } from 'react-redux';

const MyComponent = () => {
  const dispatch = useDispatch();

  // Trigger the API call and data fetching
  const handleFetchData = () => {
    dispatch(fetchData());
  };

  return (
    <button onClick={handleFetchData}>Fetch Data</button>
  );
};

export default MyComponent;