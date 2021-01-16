import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  books: any = [
    {
      id: 3695,
      name: 'Midnight Moonlight',
      genre: ["Horror, Harem, Romance"],
      authors: ["Eren Reverie"],
    },
    {
      id: 7005,
      name: 'V is for Venice',
      genre: [],
      authors: ["Bailey Elizabeth"],
    },
    {
      id: 6011,
      name: 'Forge of Destiny',
      genre: [],
      authors: ["Yrsillar"],
    },
    {
      id: 6801,
      name: 'V is for Violet',
      genre: [],
      authors: ["Bailey Elizabeth"],
    },
  ];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    // this.bookService.getMostReadBooks().subscribe(books => {
    //   console.log(books);
    //   // this.books = books;
    // })
    // this.bookService.getMostReadBooks().subscribe();
    // this.bookService.getBookDetails(4).subscribe(res => console.log(res));
    // this.bookService.getBookChapters(4).subscribe(res => console.log(res));
  }

  onPress = () => {
    this.bookService.getMostReadBooks().subscribe(res => console.log(res));
  }
}
