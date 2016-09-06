import { Routes } from '@angular/router';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorViewComponent } from './contacts-editor-view/contacts-editor-view.component';
import { AboutComponent } from './about/about.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';

export const ContactsAppRoutes: Routes = [
    {
        path: '',
        component: ContactsDashboardComponent,
        children: [
            { path: '', redirectTo: 'contacts/0' },
            { path: 'contacts/:id', component: ContactsDetailViewComponent },
            { path: 'contacts/:id/edit', component: ContactsEditorViewComponent },
        ]
    },
    { path: 'about', component: AboutComponent },
];
