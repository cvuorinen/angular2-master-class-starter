import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor-view',
  templateUrl: 'contacts-editor-view.component.html',
  styleUrls: ['contacts-editor-view.component.css']
})
export class ContactsEditorViewComponent implements OnInit {
  public contact: Contact = <Contact>{ address: {}};

  constructor(
      private contactsService: ContactsService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.contactsService.getContact(
        this.route.snapshot.params['id']
    ).subscribe(contact => {
      this.contact = contact;
    });
  }

  public goBack(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }

  public saveContact(contact: Contact) {
    this.contactsService.updateContact(contact)
        .subscribe(() => this.goBack(contact));
  }
}
