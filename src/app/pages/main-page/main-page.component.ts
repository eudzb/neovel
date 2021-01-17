import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.books;
  }

  getMostReadBooks = () => {
    this.bookService.getMostReadBooks().subscribe(res => console.log(res));
  }
}
