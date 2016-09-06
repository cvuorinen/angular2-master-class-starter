import { Routes } from '@angular/router';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsListViewComponent } from './contacts-list-view/contacts-list-view.component';
import { ContactsEditorViewComponent } from './contacts-editor-view/contacts-editor-view.component';

export const ContactsAppRoutes: Routes = [
    { path: '', component: ContactsListViewComponent},
    { path: 'contacts/:id', component: ContactsDetailViewComponent},
    { path: 'contacts/:id/edit', component: ContactsEditorViewComponent},
];
