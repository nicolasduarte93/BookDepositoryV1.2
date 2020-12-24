import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../../models/book';

import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  addBook(bookForm?: NgForm){
    if(bookForm.value._id){
      console.log(bookForm.value.year);
      this.bookService.putBook(bookForm.value).subscribe((res) => {
        console.log(res);
        this.cleanForm(bookForm);
        this.getBooks();
      })
    } else {
      console.log(bookForm.value.author);
      this.bookService.postBook(bookForm.value).subscribe((res) => {
        console.log(res);
        this.getBooks();
        this.cleanForm(bookForm);
      });
    }
    /*console.log(bookForm.value);
    this.bookService.postBook(bookForm.value)
      .subscribe((res) => {
        console.log(res);
      });*/
  }

  getBooks(){
    this.bookService.getBooks().subscribe((res) => {
      this.bookService.books = res;
     });
  }

  cleanForm(form?: NgForm){
    console.log(form.value);
    if (form){
      form.reset();
      this.bookService.selectedBook = new Book();
    }
  }

}
