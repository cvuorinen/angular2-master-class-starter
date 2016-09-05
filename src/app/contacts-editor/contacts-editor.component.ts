import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: 'contacts-editor.component.html',
  styleUrls: ['contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
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

  public cancel(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }

  public save(contact: Contact) {
    this.contactsService.updateContact(contact)
        .subscribe(() => {
          this.router.navigate(['/contacts', contact.id]);
        });
  }
}
