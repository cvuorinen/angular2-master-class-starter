import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Injectable()
export class ContactsResolver implements Resolve<Contact> {
    constructor(private contactsService: ContactsService) {}

    public resolve(route: ActivatedRouteSnapshot): Observable<Contact> {
        return this.contactsService.getContact(
            route.params['id']
        );
    }
}
