import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/entity-models/post-model';
import { User } from '../models/entity-models/user-model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getAllUsers(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}