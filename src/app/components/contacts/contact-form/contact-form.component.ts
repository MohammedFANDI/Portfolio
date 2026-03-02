import { Component, inject, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  addContact,
  cancelForm,
  updateContact,
} from '../../../store/contact/contact.actions';
import { random } from 'lodash';
import { selectContact } from '../../../store/contact/contact.selectors';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  @Input({ required: true }) edit!: boolean;
  contactForm!: FormGroup;
  store = inject(Store);

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      active: new FormControl(true),
    });
  }

  ngOnInit() {
    this.store.select(selectContact).subscribe((res) => {
      if (res) {
        this.contactForm.patchValue(res);
      } else {
        this.contactForm.reset();
      }
    });
  }

  submit() {
    if (this.edit) {
      this.updateContact();
    } else {
      this.createContact();
    }
  }

  updateContact() {
    if (this.contactForm.invalid) {
      alert('Contact form is invalid !!');
      return;
    }
    this.store.dispatch(updateContact({ contact: this.contactForm.value }));
  }

  editContact() {
    this.store.select(selectContact).subscribe((res) => {
      if (res) {
        this.contactForm.patchValue(res);
      }
    });
  }

  createContact() {
    if (this.contactForm.invalid) {
      alert('Contact form is invalid !!');
      return;
    }

    //alwys prepare object for creation
    const contact = {
      ...this.contactForm.value,
      // take a value rom 20 to 25000
      id: random(20, 25000),
    };
    //in javascript if i had an object key is similar than value we keep just key
    this.store.dispatch(addContact({ contact }));
    // this.store.dispatch(addContact({ contact: contact }));

    this.contactForm.reset();
  }

  cancelForm() {
    this.store.dispatch(cancelForm());
  }

  get name() {
    return this.contactForm.get('name');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get active() {
    return this.contactForm.get('active');
  }
}
