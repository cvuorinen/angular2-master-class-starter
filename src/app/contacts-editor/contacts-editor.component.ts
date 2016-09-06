import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: 'contacts-editor.component.html',
  styleUrls: ['contacts-editor.component.css']
})
export class ContactsEditorComponent {
  @Input() public contact: Contact;
  @Output() public save = new EventEmitter<Contact>();
  @Output() public cancel = new EventEmitter<void>();

  constructor() { }
}
