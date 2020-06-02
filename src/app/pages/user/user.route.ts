import { Routes, RouterModule }  from '@angular/router';

import { UserComponent } from './user.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];

export const UserRoute: ModuleWithProviders = RouterModule.forChild(routes);
