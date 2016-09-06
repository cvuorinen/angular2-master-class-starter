import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  public contacts: Observable<Contact[]>;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  public search(term: string) {
    this.contacts = this.contactsService.searchContacts(term);
  }
}
