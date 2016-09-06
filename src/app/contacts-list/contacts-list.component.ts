import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  public contacts: Observable<Contact[]>;

  // used in the view, but the components view could be considered an internal part of the component (debatable, and kind of plays on the fact that TS compiles private and public to same code)
  private term$ = new Subject<string>();

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = Observable.merge(
        this.contactsService.getContacts().takeUntil(this.term$),
        this.contactsService.searchContacts(this.term$)
    );
  }
}
