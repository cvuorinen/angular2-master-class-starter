import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

export const ContactsAppRoutes: Routes = [
    { path: '', component: ContactsListComponent},
    { path: 'contacts/:id', component: ContactsDetailComponent}
];
