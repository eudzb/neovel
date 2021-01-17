import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  API: string = environment.NEOVEL_API;
  headerOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  books: Book[] = [
    {
      id: 3898,
      name: 'Star Child',
      genre: ['Action', 'Adventure', 'Fantasy'],
      authors: ['Leonard'],
    },
    {
      id: 3695,
      name: 'Midnight Moonlight',
      genre: ['Horror', 'Harem', 'Romance', 'Supernatural'],
      authors: ['Eren Reverie'],
    },
    {
      id: 3905,
      name: 'Dirge',
      genre: ['Action', 'Sci-Fi', 'Fantasy', 'Tragedy'],
      authors: ['Shaeor'],
    },
    {
      id: 3873,
      name: 'Domina',
      genre: ['Action', 'Adventure', 'Supernatural'],
      authors: ['Discar'],
    },
    {
      id: 3903,
      name: 'The Fifth Defiance',
      genre: [],
      authors: ['Walter'],
    },
    {
      id: 3904,
      name: 'Daybreak on Hyperion',
      genre: [],
      authors: ['Aorii'],
    },
    {
      id: 6777,
      name: 'Occidendum',
      genre: [],
      authors: ['Thibault Guemard3'],
    },
    {
      id: 3955,
      name: 'Chosen Shackles',
      genre: ['Action', 'Sci-fi', 'Horror', 'Tragedy'],
      authors: ['Shaeor'],
    },
  ];

  constructor(private http: HttpClient) {}

  getMostReadBooks = () => {
    const url = `${this.API}/V1/book/offline/mostRead`;
    return this.http.get(url, this.headerOption).pipe(map((res) => res));
  };

  getBookDetails = (bookId: number) => {
    const url = `${this.API}/V1/book/details?bookId=${bookId}&language=ALL`;
    return this.http.get(url, this.headerOption).pipe(map((res) => res));
  };

  getBookChapters = (bookId: number) => {
    const url = `${this.API}/V5/chapters?bookId=${bookId}`;
    return this.http.get(url, this.headerOption).pipe(map((res) => res));
  };
}
