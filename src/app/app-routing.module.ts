import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateFromComponent } from './client-create-from/client-create-from.component';
import { ClientEditFormComponent } from './client-edit-form/client-edit-form.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientListComponent } from './client-list/client-list.component';
import { HomeComponent } from './home';

const routes: Routes = [
  { path: 'client/list', component: ClientListComponent },
  { path: 'client/:id', component: ClientInfoComponent },
  { path: 'client/create', component: ClientCreateFromComponent },
  { path: 'client/edit/:id', component: ClientEditFormComponent },
  { path: '', redirectTo: '/client/list', pathMatch: 'full' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
