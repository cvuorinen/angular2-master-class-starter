import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';

@Injectable()
export class ContactsService {

  private contacts: Contact[] = CONTACT_DATA;

  constructor() { }

  public getContacts() {
    return this.contacts;
  }

  public getContact(id: number): Contact {
    return this.contacts.find(contact => contact.id === id);
  }
}
