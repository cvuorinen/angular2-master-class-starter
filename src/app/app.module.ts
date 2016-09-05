import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
//import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsHeaderComponent } from './contacts-header'; // shorthand works because exported in contacts-header/index.ts

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent
  ],
  imports: [BrowserModule],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
