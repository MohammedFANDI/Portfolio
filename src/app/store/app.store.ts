import { contactReducer } from './contact/contact.reducer';
import { counterReducer } from './counter/counter.reducer';

export const appStore = {
  counter: { name: 'counter', reducer: counterReducer },
  contacts: { name: 'contacts', reducer: contactReducer },
};
