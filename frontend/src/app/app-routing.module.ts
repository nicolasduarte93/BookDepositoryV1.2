import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BooksComponent } from './components/books/books.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '', redirectTo: '/login' , pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'books', component: BooksComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, MainComponent, BooksComponent]