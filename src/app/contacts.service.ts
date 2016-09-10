import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { Contact } from './models/contact';
import { API_ENDPOINT } from './app.tokens';

@Injectable()
export class ContactsService {
  private list$ = new Subject<Contact[]>();

  constructor(
      private http: Http,
      @Inject(API_ENDPOINT) private apiEndpoint: string
  ) {}

  public getContacts(): Observable<Contact[]> {
    this.fetchContacts('/contacts')
        .map(data => data.items)
        .subscribe(items => this.list$.next(items));

    return this.list$.asObservable();
  }

  public getContact(id: number | string): Observable<Contact> {
    return this.fetchContacts(`/contacts/${id}`)
        .map(data => data.item);
  }

  public updateContact(contact: Contact): Observable<Contact> {
      const update = this.http.put(`${this.apiEndpoint}/contacts/${contact.id}`, contact)
          .map(result => result.json())
          .map(data => data.item)
          .share();

    update.subscribe(() => this.getContacts());

    return update;
  }

  private fetchContacts(apiCall: string): Observable<any> {
    return this.http.get(this.apiEndpoint + apiCall)
        .map(result => result.json());
  }

  public searchContacts(terms: Observable<string>, debounceMs = 400): Observable<Contact[]> {
      return terms
          .debounceTime(debounceMs)
          .distinctUntilChanged()
          .switchMap(term => this.fetchContacts(`/search?text=${term}`))
          .map(data => data.items);
  }

  public addContact(contact: Contact): Observable<Contact> {
    const create = this.http.post(`${this.apiEndpoint}/contacts`, contact)
        .map(result => result.json())
        .map(data => data.item)
        .share();

    create.subscribe(() => this.getContacts());

    return create;
  }

}
