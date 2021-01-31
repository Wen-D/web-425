/* ============================================
; Title:  In & Out Book Part Uno
; Author: Professor Krasso
; Date:   27 January 2021
; Modified by: Wendy Leon
; Description: In & Out Book Part Uno
;===========================================
*/
//external files import
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

import { IBook } from '../book.interface';
import { Observable } from 'rxjs';

import {MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  //observable
  books: Observable<IBook[]>;
  // book list array with headers
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  book: IBook;

    //constructor calls getbooks method
    constructor(private booksService: BooksService, private dialog: MatDialog) {
      this.books = this.booksService.getBooks();
     }

    ngOnInit(): void {
    }
  //function receives isbn and finds book match and logs it to the console
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book },
      disableClose: true,
      width: '800px'
    })


    console.log(this.book);
    // Call the afterClosed() function and set the book variable to null
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === 'confirm') {
          this.book = null
        }
    });

  }
}
