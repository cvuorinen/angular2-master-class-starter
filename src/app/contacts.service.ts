import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from './models/contact';
import { API_ENDPOINT } from './app.tokens';

@Injectable()
export class ContactsService {
  constructor(
      private http: Http,
      @Inject(API_ENDPOINT) private apiEndpoint: string
  ) {}

  public getContacts(): Observable<Contact[]> {
    return this.fetchContacts('/contacts')
        .map(data => data.items);
  }

  public getContact(id: number | string): Observable<Contact> {
    return this.fetchContacts(`/contacts/${id}`)
        .map(data => data.item);
  }

  public updateContact(contact: Contact): Observable<Contact> {
      return this.http.put(`${this.apiEndpoint}/contacts/${contact.id}`, contact)
          .map(result => result.json())
          .map(data => data.item);
  }

  private fetchContacts(apiCall: string): Observable<any> {
    return this.http.get(this.apiEndpoint + apiCall)
        .map(result => result.json());
  }

  public searchContacts(term: string): Observable<Contact[]> {
      return this.fetchContacts(`/search?text=${term}`)
          .map(data => data.items);
  }
}
