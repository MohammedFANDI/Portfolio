export interface ContactModel {
  id?: number;
  name: string;
  phone: string;
  image: string;
  active: boolean;
}

export interface ContactState {
  contacts: ContactModel[];
  edit: boolean;
  showForm: boolean;
  contact: ContactModel | undefined;
}
