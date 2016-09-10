import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-creator-view',
  templateUrl: 'contacts-creator-view.component.html',
  styleUrls: ['contacts-creator-view.component.css']
})
export class ContactsCreatorViewComponent implements OnInit {
  public warnOnClose = true;

  constructor(
      private contactsService: ContactsService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  public save(contact: Contact) {
    this.contactsService.addContact(contact)
        .subscribe((contact) => {
          this.warnOnClose = false;
          this.router.navigate(['/contacts', contact.id]);
        });
  }

  public goBack() {
    this.router.navigate(['']);
  }

}
