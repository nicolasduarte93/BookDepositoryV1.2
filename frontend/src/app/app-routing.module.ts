import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BooksComponent } from './components/books/books.component';
import { MainComponent } from './components/main/main.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path: '', redirectTo: '/login' , pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'books', component: BooksComponent}, 
  {path: 'table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, MainComponent, BooksComponent, TableComponent]