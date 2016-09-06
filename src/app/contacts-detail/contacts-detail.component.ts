import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css']
})
export class ContactsDetailComponent {
  @Input() public contact: Contact;
  @Output() public edit = new EventEmitter<Contact>();
  @Output() public back = new EventEmitter<void>();

  constructor() {}
}
