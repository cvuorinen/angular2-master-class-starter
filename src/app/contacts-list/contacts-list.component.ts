import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.scss']
})
export class ContactsListComponent {
  @Input() public contacts: Observable<Contact[]>;
  @Output() public view = new EventEmitter<Contact>();
  @Output() public search = new EventEmitter<string>();

  constructor() { }
}
