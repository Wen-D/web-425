/*============================================
; Title: In and Out Part Deux
; Author: Professor Krasso
; Date:   28 January 2021
; Modified by: Wendy Leon
; Description:  In and Out Part Deux
;===========================================
*/

// external files import
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  //class field with array ibook
  books: Array<IBook>;

  //array with five book objects
  constructor() {
    this.books = [// book array with 5 properties
      {
        isbn: '1236589758965',
        title: 'THE GIRL WITH THE DRAGON TATTOO.',
        description: 'The first in Stieg Larssons thrilling Millenium series featuring Lisbeth Salander.',
        numOfPages: 216,
        authors: ['Stieg Larsson']
      },
      {
        isbn: '9856325879635',
        title: 'THE GIRL WHO PLAYED WITH FIRE.',
        description: 'This second book in the Millennium series is a masterful, endlessly satisfying novel. Mikael Blomkvist, crusading publisher of the magazine Millennium, has decided to run a story that will expose an extensive sex trafficking operation. On the eve of its publication, the two reporters responsible for the article are murdered, and the fingerprints found on the murder weapon belong to his friend, the troubled genius hacker Lisbeth Salander. Blomkvist, convinced of Salanders innocence, plunges into an investigation. Meanwhile, Salander herself is drawn into a murderous game of cat and mouse, which forces her to face her dark past.',
        numOfPages: 217,
        authors: ['Stieg Larsson']
      },
      {
        isbn: '6589632145879',
        title: 'THE GIRL WHO KICKED THE HORNETS NEST.',
        description: 'The third volume of the Millennium series, Lisbeth Salander lies in critical condition in a Swedish hospital, a bullet in her head.',
        numOfPages: 218,
        authors: ['Stieg Larsson']
      },
      {
        isbn: '5896478965789',
        title: 'THE GIRL IN THE SPIDERS WEB.',
        description: 'Lisbeth Salander and Mikael Blomkvist return in this ripped-from-the-headlines, high-octane follow-up to Stieg Larssons The Girl Who Kicked the Hornets Nest.',
        numOfPages: 219,
        authors: ['David Lagercrantz']
      },
      {
        isbn: '3269856478963',
        title: 'THE GIRL WHO TAKES AN EYE FOR AN EYE.',
        description: 'Lisbeth Salander teams up with journalist Mikael Blomkvist to uncover the secrets of her childhood and to take revenge.',
        numOfPages: 220,
        authors: ['David Lagercrantz']
      }
    ]
  }
    // observable
    getBooks(): Observable<IBook[]> {
      return of(this.books);
    }
    // iterating through book array
    getBook(isbn: string): IBook {
      for (let book of this.books) {
        if (book.isbn === isbn) {
          return book;
        }
      }
    }
  }
