import { Component, OnInit } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { Observable } from 'rxjs/Rx';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit {
    public title: Observable<string>;

    constructor(
        private eventBusService: EventBusService,
        private titleService: Title
    ) {}

    ngOnInit () {
        this.title = this.eventBusService.observe(EventBusService.APP_TITLE_CHANGE);
        this.title.subscribe(title => this.titleService.setTitle(title));
    }
}
