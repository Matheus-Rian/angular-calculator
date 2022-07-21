import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GithubModel } from 'src/models/github.model';

@Injectable({
  providedIn: 'root',
})

export class GithubService {
  private readonly url = 'https://api.github.com';

  constructor(
    private http: HttpClient,
  ) {}

  getUser() {
    return this.http.get<GithubModel>(`${this.url}/users/matheus-rian`).pipe(
      map(data => new GithubModel(data)),
      catchError(error => this.errorCallUser(error))
    );
  }

  errorCallUser(error: any) {
    window.alert('User not found');
    console.error(error);
    return EMPTY;
  }
}
