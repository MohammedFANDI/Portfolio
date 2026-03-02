import { Component, inject, Input } from '@angular/core';
import { ContactModel } from '../../../store/contact/contact.model';
import { Store } from '@ngrx/store';
import {
  deleteContact,
  editContact,
  toggleActiveContact,
} from '../../../store/contact/contact.actions';

@Component({
  selector: 'app-contact-actions',
  standalone: true,
  imports: [],
  templateUrl: './contact-actions.component.html',
  styleUrl: './contact-actions.component.css',
})
export class ContactActionsComponent {
  @Input() contact!: ContactModel;

  store = inject(Store);

  deleteContact() {
    if (
      !confirm(
        'are you sure you wanna delete this contact: ' + this.contact.name
      )
    ) {
      return;
    }

    if (this.contact.id) {
      this.store.dispatch(deleteContact({ id: this.contact.id }));
    }
  }

  toggleActiveContact() {
    if (this.contact.id) {
      this.store.dispatch(toggleActiveContact({ id: this.contact.id }));
    }
  }

  editContact() {
    this.store.dispatch(editContact({ contact: this.contact }));
  }
}
