import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: 'contacts-creator.component.html',
  styleUrls: ['contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {
  @Output() public save = new EventEmitter<Contact>();
  @Output() public cancel = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
