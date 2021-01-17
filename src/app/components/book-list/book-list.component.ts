import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() name: string;
  @Input() genre: string[];
  @Input() authors: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
