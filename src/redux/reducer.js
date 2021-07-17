import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import infoReducer from './info/reducer';
import blocksReducer from './blocks/reducer';
import txsReducer from './txs/reducer';
import supplyReducer from './supply/reducer';
import addressesReducer from './addresses/reducer';
import priceReducer from './price/reducer';
import graphReducer from './graph/reducer';
import blockchain from './blockchain/reducer';

const reducers = combineReducers({
  blockchain,
  auth: authReducer,
  info: infoReducer,
  blocks: blocksReducer,
  txs: txsReducer,
  supply: supplyReducer,
  addresses: addressesReducer,
  price: priceReducer,
  graph: graphReducer
});

export default reducers;
