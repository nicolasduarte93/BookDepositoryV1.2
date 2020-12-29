import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BooksComponent } from './components/books/books.component';
import { MainComponent } from './components/main/main.component';
import { TableComponent } from './components/table/table.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RecbooksComponent } from './components/recbooks/recbooks.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/login' , pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'books', component: BooksComponent}, 
  {path: 'table', component: TableComponent},
  {path: 'recbooks', component: RecbooksComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'aboutus', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, MainComponent, BooksComponent, TableComponent, RecbooksComponent, ContactComponent, AboutusComponent]