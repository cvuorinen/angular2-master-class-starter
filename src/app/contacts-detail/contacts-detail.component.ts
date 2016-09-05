import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  public contact: Contact;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.contactsService.getContact(
        Number(this.route.snapshot.params['id'])
    ).subscribe(contact => {
        this.contact = contact
    });
  }
}
