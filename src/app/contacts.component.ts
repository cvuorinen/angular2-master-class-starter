import { Component, OnInit } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit {
    public title: Observable<string>;

    constructor(private eventBusService: EventBusService) {}

    ngOnInit () {
        this.title = this.eventBusService.observe(EventBusService.APP_TITLE_CHANGE);
    }
}
