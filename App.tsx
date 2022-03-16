import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import Loading from './src/components/atoms/Loading';
import Store from './src/redux/store';
import Restaurant from './src/screens/Restaurant';
import {startApiService} from './src/services/api-service';

const App = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    startApiService().then(() => setIsReady(true));
  });

  return (
    <Provider store={Store}>{isReady ? <Restaurant /> : <Loading />}</Provider>
  );
};

export default App;
