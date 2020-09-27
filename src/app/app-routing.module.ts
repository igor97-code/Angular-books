import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component'
import { BookEditComponent } from './book-edit/book-edit.component'
import { BookAddComponent } from './book-add/book-add.component'

const routes: Routes = [
  {path:'', component: BookListComponent},
  {path:'edit/:id', component:BookEditComponent},
  {path:'book-add', component:BookAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
