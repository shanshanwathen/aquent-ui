import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {JobFormComponent} from "./job-form/job-form.component";

const routes: Routes = [
  {path: 'jobs', component: AppComponent},
  {path: 'jobs/:id', component: JobFormComponent},
  {path: 'kafka/create-job', component: JobFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
