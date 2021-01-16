import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  API: string = environment.NEOVEL_API;
  headerOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
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
