import { createAction, props } from '@ngrx/store';
import { ContactModel } from './contact.model';

export const loadContacts = createAction('[Contacts] Load list of contacts');

export const addContact = createAction(
  '[Contacts] add a contact',
  props<{ contact: ContactModel }>()
);

export const updateContact = createAction(
  '[Contacts] update a contact',
  props<{ contact: ContactModel }>()
);

export const deleteContact = createAction(
  '[Contacts] delete a Contact',
  props<{ id: number }>()
);

export const toggleActiveContact = createAction(
  '[Contacts] toogle an active Contact',
  props<{ id: number }>()
);

export const editContact = createAction(
  '[Contacts] edit a Contact',
  props<{ contact: ContactModel }>()
);

export const showForm = createAction('[Contacts] show a form contact ');

export const cancelForm = createAction('[Contacts] cancel a form ');
