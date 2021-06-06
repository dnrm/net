import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(environment.url)
  }
}
