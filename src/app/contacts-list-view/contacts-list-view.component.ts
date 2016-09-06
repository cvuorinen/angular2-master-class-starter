import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-list-view',
  templateUrl: 'contacts-list-view.component.html',
  styleUrls: ['contacts-list-view.component.css']
})
export class ContactsListViewComponent implements OnInit {
  public contacts: Observable<Contact[]>;
  private term$ = new Subject<string>();

  constructor(
      private contactsService: ContactsService,
      private eventBus: EventBusService,
      private router: Router
  ) { }

  ngOnInit() {
    this.eventBus.emit(EventBusService.APP_TITLE_CHANGE, 'Contacts');

    this.contacts = Observable.merge(
        this.contactsService.getContacts().takeUntil(this.term$),
        this.contactsService.searchContacts(this.term$)
    );
  }

  public navigateToDetails(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }
}
