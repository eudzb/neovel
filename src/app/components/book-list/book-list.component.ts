import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() genres: string[];
  @Input() authors: string[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToBook = () => {
    this.router.navigate(['/book-info/', this.id ]);
  };
}
