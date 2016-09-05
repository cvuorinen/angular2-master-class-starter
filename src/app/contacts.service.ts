import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from './models/contact';

@Injectable()
export class ContactsService {
  private API_ENDPOINT = 'http://localhost:4201/api';
  constructor(private http: Http) {}

  public getContacts(): Observable<Contact[]> {
    return this.fetchContacts('/contacts')
        .map(data => data.items);
  }

  public getContact(id: number | string): Observable<Contact> {
    return this.fetchContacts(`/contacts/${id}`)
        .map(data => data.item);
  }

  private fetchContacts(apiCall: string): Observable<any> {
    return this.http.get(this.API_ENDPOINT + apiCall)
        .map(result => result.json());
  }
}
