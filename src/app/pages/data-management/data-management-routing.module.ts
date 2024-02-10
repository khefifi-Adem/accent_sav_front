import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataManagementComponent } from './data-management.component';
import {AuthorityComponent} from './authority/authority.component';
import {AdminComponent} from './admin/admin.component';
import {NotificationComponent} from '../notification/notification.component';

const routes: Routes = [
  {
    path: '',
    component: DataManagementComponent,
    children: [
      {
        path: 'admin',
        // canActivate: [SuperAdminGuard],
        component: AdminComponent,
      },
      {
        path: 'authorities',
        // canActivate: [SuperAdminGuard],
        component: AuthorityComponent,
      },
      {
        path: 'notification',
        // canActivate: [AdminGuard],
        component: NotificationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataManagementRoutingModule { }