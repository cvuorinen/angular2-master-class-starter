import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

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
      private router: Router
  ) { }

  ngOnInit() {
    this.contacts = Observable.merge(
        this.contactsService.getContacts().takeUntil(this.term$),
        this.contactsService.searchContacts(this.term$)
    );
  }

  public navigateToDetails(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }
}
