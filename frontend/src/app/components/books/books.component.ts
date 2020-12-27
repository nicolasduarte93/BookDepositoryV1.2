import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from '../../models/book';

import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {

  constructor(private router: Router, public bookService: BookService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getBooks();
    //console.log(this.dataSource);
  }

  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }  

  addBook(bookForm?: NgForm){
    if(bookForm.value._id){
      console.log(bookForm.value.year);
      this.bookService.putBook(bookForm.value).subscribe((res) => {
        console.log(res);
        this.cleanForm(bookForm);
        this.getBooks();
        this.openSnackBar("Book Updated!", "Accept");
      })
    } else {
      console.log(bookForm.value.author);
      this.bookService.postBook(bookForm.value).subscribe((res) => {
        console.log(res);
        this.getBooks();
        this.cleanForm(bookForm);
        this.openSnackBar("Book Saved!", "Accept");
      });
    }
  }

  getBooks(){
    this.bookService.getBooks().subscribe((res) => {
      this.bookService.books = res;
      console.log(res);
     });
  }

  editBook(book: Book){
    this.bookService.selectedBook = book;
  }

  deleteBook(book: Book){
    if(confirm('Are you sure you want to delete it?')) {
      this.bookService.deleteBook(book._id).subscribe(res => {
        this.getBooks();
        this.openSnackBar("Book Deleted!", "Accept");
      })
    }
  }  

  cleanForm(form?: NgForm){
    console.log(form.value);
    if (form){
      form.reset();
      this.bookService.selectedBook = new Book();
    }
  }

  backToMain(){
    this.router.navigateByUrl('/main');
  }

}
