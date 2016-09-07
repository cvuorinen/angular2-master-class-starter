import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-editor-view',
  templateUrl: 'contacts-editor-view.component.html',
  styleUrls: ['contacts-editor-view.component.css']
})
export class ContactsEditorViewComponent implements OnInit {
  public contact: Contact = <Contact>{ address: {}};
  public warnOnClose = true;

  constructor(
      private contactsService: ContactsService,
      private eventBus: EventBusService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
        .map(data => data['contact'])
        .subscribe(contact => {
          this.eventBus.emit(EventBusService.APP_TITLE_CHANGE, `Editing: ${contact.name}`);

          this.contact = contact;
        });
  }

  public goBack(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }

  public saveContact(contact: Contact) {
    this.contactsService.updateContact(contact)
        .subscribe(() => {
          this.warnOnClose = false;
          this.goBack(contact);
        });
  }
}
