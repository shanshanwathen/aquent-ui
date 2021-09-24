import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobFormComponent} from "./job-form/job-form.component";
import {JobListComponent} from "./job-list/job-list.component";
import {JobInfoComponent} from "./job-info/job-info.component";

const routes: Routes = [
  {path: 'jobs', component: JobListComponent},
  {path: 'jobs/:id', component: JobInfoComponent},
  {path: 'kafka/create-job', component: JobFormComponent},
  {path: '', redirectTo: '/jobs', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
