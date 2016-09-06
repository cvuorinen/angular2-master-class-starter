import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: 'contacts-detail-view.component.html',
  styleUrls: ['contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  public contact: Contact;

  constructor(
      private contactsService: ContactsService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.contactsService.getContact(
        Number(this.route.snapshot.params['id'])
    ).subscribe(contact => {
      this.contact = contact
    });
  }

  public navigateToEditor(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);
  }

  public navigateToList() {
    this.router.navigate(['/'])
  }

}
