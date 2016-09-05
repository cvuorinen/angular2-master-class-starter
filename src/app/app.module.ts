import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ContactsAppComponent } from './contacts.component';
//import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsHeaderComponent } from './contacts-header'; // shorthand works because exported in contacts-header/index.ts
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAppRoutes } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(ContactsAppRoutes)
  ],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService]
})
export class ContactsModule {

}
