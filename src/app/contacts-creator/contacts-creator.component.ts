import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';
import { COUNTRIES_DATA } from '../data/countries-data';

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: 'contacts-creator.component.html',
  styleUrls: ['contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {
  @Output() public save = new EventEmitter<Contact>();
  @Output() public cancel = new EventEmitter<void>();

  public countries = COUNTRIES_DATA;

  constructor() { }

  ngOnInit() {
  }

}
