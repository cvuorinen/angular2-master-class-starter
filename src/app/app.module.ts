import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { API_ENDPOINT, CONFIRM_NAVIGATION_GUARD } from './app.tokens';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsListViewComponent } from './contacts-list-view/contacts-list-view.component';
import { ContactsEditorViewComponent } from './contacts-editor-view/contacts-editor-view.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactsResolver } from './shared/contacts.resolver';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { ContactsCreatorViewComponent } from './contacts-creator-view/contacts-creator-view.component';
import { EmailValidator } from './email-validator.directive';
import { EmailAvailabilityValidator } from './email-availability-validator.directive';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    ContactsListViewComponent,
    ContactsEditorViewComponent,
    ContactsDashboardComponent,
    AboutComponent,
    ZippyComponent,
    ContactsCreatorComponent,
    ContactsCreatorViewComponent,
    EmailValidator,
    EmailAvailabilityValidator
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ContactsAppRoutes)
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    ContactsService,
    EventBusService,
    ContactsResolver,
    Title,
    { provide: API_ENDPOINT, useValue: 'http://localhost:4201/api' },
    {
      provide: CONFIRM_NAVIGATION_GUARD,
      useValue: (component) => {
        if (component.warnOnClose) {
          return window.confirm('Navigate away without saving?');
        }

        return true;
      }
    }
  ]
})
export class ContactsModule {

}
