import { Component } from '@angular/core';
import { Contact } from './models/contact';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  contact: Contact = {
    id: 7,
    name: 'Boaty McBoatface',
    email: '',
    phone: '',
    birthday: '',
    website: '',
    image: '/assets/images/boaty.jpg',
    address: {
      street: '6554 park lane',
      zip: '43378',
      city: 'Rush',
      country: 'United States'
    }
  };
}
