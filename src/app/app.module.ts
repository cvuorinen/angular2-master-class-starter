import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactsAppComponent } from './contacts.component';
//import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsHeaderComponent } from './contacts-header'; // shorthand works because exported in contacts-header/index.ts
import { ContactsService } from './contacts.service';
import { EventBusService } from './event-bus.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAppRoutes } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { API_ENDPOINT } from './app.tokens';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsListViewComponent } from './contacts-list-view/contacts-list-view.component';
import { ContactsEditorViewComponent } from './contacts-editor-view/contacts-editor-view.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    ContactsListViewComponent,
    ContactsEditorViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ContactsAppRoutes)
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    ContactsService,
    EventBusService,
    { provide: API_ENDPOINT, useValue: 'http://localhost:4201/api' }
  ]
})
export class ContactsModule {

}
