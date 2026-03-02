import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ContactListComponent } from '../../components/contacts/contact-list/contact-list.component';
import { ContactGridComponent } from '../../components/contacts/contact-grid/contact-grid.component';
import { AsyncPipe } from '@angular/common';
import { ContactFormComponent } from '../../components/contacts/contact-form/contact-form.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectContactOptions } from '../../store/contact/contact.selectors';
import { showForm } from '../../store/contact/contact.actions';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    ContactListComponent,
    ContactGridComponent,
    ContactFormComponent,
    AsyncPipe,
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  //showForm = false;

  // toggleForm() {
  //   this.showForm = true;
  // }

  // return() {
  //   this.showForm = false;
  // }

  list: boolean = false;

  store = inject(Store);

  options!: Observable<{ showForm: boolean; edit: boolean }>;

  ngOnInit() {
    this.options = this.store.select(selectContactOptions);
  }

  showForm() {
    this.store.dispatch(showForm());
  }

  changeView(etat: boolean) {
    this.list = etat;
  }
}
