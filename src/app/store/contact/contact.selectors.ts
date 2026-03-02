import { createSelector } from '@ngrx/store';
import { CounterModel } from '../counter/counter.model';
import { ContactState } from './contact.model';

export interface AppState {
  counter: CounterModel;
  contacts: ContactState;
}

export const trackContacts = (state: AppState) => state.contacts;

export const selectContacts = createSelector(
  trackContacts,
  (state) => state.contacts
);

// got them with a two selectors

export const selectShowForm = createSelector(
  trackContacts,
  (state) => state.showForm
);

export const selectEdit = createSelector(trackContacts, (state) => state.edit);

/////////////////////////////////////////

// to geit to selectors at the same selectors

export const selectContactOptions2 = createSelector(trackContacts, (state) => ({
  showForm: state.showForm,
  edit: state.edit,
}));

////////////////////////////////////////

//destructring way to do it (the best way)

export const selectContactOptions = createSelector(
  trackContacts,
  ({ showForm, edit }) => ({ showForm, edit })
);

/////////////////////////////////////////

export const selectContact = createSelector(
  trackContacts,
  (state) => state.contact
);
