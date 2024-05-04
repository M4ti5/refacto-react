// This file has to be left untouched
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import createStore from './redux/store'
import { receiveDomains } from './redux/domains/actions';

const store = createStore();

store.dispatch(receiveDomains([
  'US_OK-WOK',
  'FR_NK-WOL',
  'FR_OK-NPP',
  'EN_NK-NRP',
  'EN_BL-WOL',
]))


// Correction leagcy du ReactDOM
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Provider store={store}><App /></Provider>);