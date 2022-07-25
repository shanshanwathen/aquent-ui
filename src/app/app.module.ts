import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditFormComponent } from './client-edit-form/client-edit-form.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientCreateFromComponent } from './client-create-from/client-create-from.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientEditFormComponent,
    ClientListComponent,
    ClientInfoComponent,
    ClientCreateFromComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
