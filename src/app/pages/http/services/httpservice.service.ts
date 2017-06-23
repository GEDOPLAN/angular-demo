import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const BASE_URL = "http://localhost:3000/posts/";

export interface Post {
  id: number;
  title: string;
  author: string;
}

@Injectable()
export class HTTPServiceService {

  constructor(private http: Http) { }

  read(): Observable<Post[]> {
    return this.http.get(BASE_URL).map(r => r.json());
  }

  readWithError(): Observable<Post[]> {
    return this.http.get('http://localhost:3000/postsxxx/').map(r => r.json());
  }

  readById(id: number) {
    let search = new URLSearchParams();
    search.append("id", <any>id);

    return this.http.get(BASE_URL, { search }).map(r => r.json());
  }

  save(post: Post): Observable<Post>{
    const method = post.id ? RequestMethod.Put : RequestMethod.Post;

    return this.http.request(BASE_URL + (post.id || ''), { method, 'body': post }).map(r => r.json());
  }

  remove(id:number): Observable<number>{
    return this.http.delete(BASE_URL + id).map(r => id);
  }
}
