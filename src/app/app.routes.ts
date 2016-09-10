import { Routes } from '@angular/router';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorViewComponent } from './contacts-editor-view/contacts-editor-view.component';
import { AboutComponent } from './about/about.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { CONFIRM_NAVIGATION_GUARD } from './app.tokens';
import { ContactsResolver } from './shared/contacts.resolver';
import { ContactsCreatorViewComponent } from './contacts-creator-view/contacts-creator-view.component';

export const ContactsAppRoutes: Routes = [
    {
        path: '',
        component: ContactsDashboardComponent,
        children: [
            { path: '', redirectTo: 'contacts/0' },
            {
                path: 'contacts/new',
                component: ContactsCreatorViewComponent,
                canDeactivate: [CONFIRM_NAVIGATION_GUARD]
            },
            {
                path: 'contacts/:id',
                component: ContactsDetailViewComponent,
                resolve: {
                    contact: ContactsResolver
                }
            },
            {
                path: 'contacts/:id/edit',
                component: ContactsEditorViewComponent,
                resolve: {
                    contact: ContactsResolver
                },
                canDeactivate: [CONFIRM_NAVIGATION_GUARD]
            },
        ]
    },
    { path: 'about', component: AboutComponent },
];
