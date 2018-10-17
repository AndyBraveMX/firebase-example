import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonComponent } from './list-person/list-person.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListPersonComponent,
    data: { title: 'List Persons' }
  },
  {
    path: 'person-create',
    component: CreatePersonComponent,
    data: { title: 'Create Persons' }
  },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListPersonComponent,
    CreatePersonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
