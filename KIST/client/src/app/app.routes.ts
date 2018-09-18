import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesComponent } from './modules/modules.component';
import { FindComponent } from './find/find.component';
import { HelpComponent } from './help/help.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'modules', component: ModulesComponent },
  { path: 'find', component: FindComponent},
  { path: 'help', component: HelpComponent },
  { path: 'account', component: AccountComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
