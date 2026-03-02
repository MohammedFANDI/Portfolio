import { createReducer, on } from '@ngrx/store';
import { contactState } from './contact.state';
import {
  addContact,
  cancelForm,
  deleteContact,
  editContact,
  loadContacts,
  showForm,
  toggleActiveContact,
  updateContact,
} from './contact.actions';
import { contacts } from '../../data';

export const contactReducer = createReducer(
  contactState,

  on(loadContacts, (state) => ({ ...state, contacts: contacts })),

  on(addContact, (state, action) => ({
    ...state,
    showForm: false,
    contacts: [action.contact, ...state.contacts],
  })),

  on(updateContact, (state, action) => ({
    ...state,
    contacts: state.contacts.map((contact) =>
      contact.id === action.contact.id ? action.contact : contact
    ),
  })),

  on(deleteContact, (state, action) => ({
    ...state,
    contacts: state.contacts.filter((contact) => contact.id !== action.id),
  })),

  on(editContact, (state, action) => ({
    ...state,
    contact: action.contact,
    showForm: true,
    edit: true,
  })),

  on(toggleActiveContact, (state, action) => ({
    ...state,
    contacts: state.contacts.map((contact) =>
      contact.id === action.id
        ? { ...contact, active: !contact.active }
        : contact
    ),
  })),

  on(showForm, (state) => ({
    ...state,
    showForm: true,
    edit: false,
    contact: undefined,
  })),

  on(cancelForm, (state) => ({
    ...state,
    showForm: false,
    edit: false,
    contact: undefined,
  }))
);
