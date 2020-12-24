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

  constructor(private http: HttpClient) { 
    this.selectedBook= new Book();
  }

  // Agregar
  postBook(book: Book){
    console.log(book.year);
    return this.http.post(this.URL_API, book);
  }

  // Consultar
  getBooks(){
    return this.http.get<Book[]>(this.URL_API);
  }  

  // Actualizar
  putBook(book: Book){
    return this.http.put(this.URL_API + `/${book._id}`, book);
  }
  
  // Eliminar
  deleteBook(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
