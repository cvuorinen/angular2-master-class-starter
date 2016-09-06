import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: 'contacts-detail-view.component.html',
  styleUrls: ['contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  public contact: Contact;

  constructor(
      private contactsService: ContactsService,
      private eventBus: EventBusService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contactsService.getContact(params['id'])
          .subscribe(contact => {
            this.eventBus.emit(EventBusService.APP_TITLE_CHANGE, contact.name);

            this.contact = contact;
          });
    });
  }

  public navigateToEditor(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);
  }

  public navigateToList() {
    this.router.navigate(['/'])
  }

}
