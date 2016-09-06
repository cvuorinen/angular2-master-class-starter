import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';

export const ContactsAppRoutes: Routes = [
    { path: '', component: ContactsListComponent},
    { path: 'contacts/:id', component: ContactsDetailViewComponent},
    { path: 'contacts/:id/edit', component: ContactsEditorComponent},
];
