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
      rating: 3.4,
      followers: 199,
    },
    {
      id: 3695,
      name: 'Midnight Moonlight',
      genre: ['Horror', 'Harem', 'Romance', 'Supernatural'],
      authors: ['Eren Reverie'],
      rating: 3.7,
      followers: 58,
    },
    {
      id: 3905,
      name: 'Dirge',
      genre: ['Action', 'Sci-Fi', 'Fantasy', 'Tragedy'],
      authors: ['Shaeor'],
      rating: 3,
      followers: 28,
    },
    {
      id: 3873,
      name: 'Domina',
      genre: ['Action', 'Adventure', 'Supernatural'],
      authors: ['Discar'],
      rating: 3.3,
      followers: 25,
    },
    {
      id: 3903,
      name: 'The Fifth Defiance',
      genre: [],
      authors: ['Walter'],
      rating: 0,
      followers: 2,
    },
    {
      id: 3904,
      name: 'Daybreak on Hyperion',
      genre: [],
      authors: ['Aorii'],
      rating: 5,
      followers: 11,
    },
    {
      id: 6777,
      name: 'Occidendum',
      genre: [],
      authors: ['Thibault Guemard3'],
      rating: 0,
      followers: 1,
    },
    {
      id: 3955,
      name: 'Chosen Shackles',
      genre: ['Action', 'Sci-fi', 'Horror', 'Tragedy'],
      authors: ['Shaeor'],
      rating: 3.8,
      followers: 19,
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
