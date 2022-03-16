import {applyMiddleware, createStore} from 'redux';
import {Reducers, rootSaga} from '../reducers';
import createSagaMiddleware from 'redux-saga';
import {LogBox} from 'react-native';

// Removing warning from dev tools
LogBox.ignoreLogs(['Require cycle:']);

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default Store;
