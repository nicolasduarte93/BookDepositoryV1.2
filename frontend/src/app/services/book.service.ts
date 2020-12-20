import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  selectedBook: Book;
  books: Book[];
  readonly URL_API = 'http://localhost:3000/api/books';

  constructor(private http: HttpClient) { }

  // Consultar
  getBooks(){
    return this.http.get(this.URL_API);
  }

  // Agregar
  postBook(Book: Book){
    this.http.post(this.URL_API, Book);
  }

  // Actualizar
  putBook(Book: Book){
    this.http.put(this.URL_API + `/${Book._id}`, Book);
  }
  
  // Eliminar
  deleteBook(_id: Book){
    this.http.delete(this.URL_API + `/${_id}`);
  }

}
