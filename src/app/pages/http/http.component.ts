import { Component, OnInit } from '@angular/core';
import { SourceLinkServiceService } from '../../services/source-link-service.service';
import { HTTPServiceService, Post } from './services/httpservice.service'
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.less'],
  providers: [HTTPServiceService]
})
export class HttpComponent implements OnInit {

  posts: Post[] = []
  posts$: Observable<Post[]>;
  suchePosts$: Observable<Post[]>;

  post: Post = <Post>{};


  constructor(src: SourceLinkServiceService, private demoService: HTTPServiceService) {
    src.setSourceLink('/src/app/http');

    demoService.read().subscribe(posts => this.posts = posts);
    this.posts$ = demoService.read();
    demoService.readWithError().subscribe(
      r => console.log(r),
      error => console.log("Fehler aufgetreten: " + error.status)
    );
  }

  suche(id: number) {
    this.suchePosts$ = this.demoService.readById(id);
  }

  save() {
    this.demoService.save(this.post).subscribe(r => this.post = r);
  }

  ngOnInit() {
  }




  // rxjs 'Single Point of Truth Beispiel //
  // jegliche Manipulationen werden über einen zentralen Stream behandel
  editPosts: Subject<any> = new Subject<any>();

  construtorNotInUse() {
    //...
    Observable.merge(this.editPosts, this.demoService.read())
      .map(p => Array.isArray(p) ? p : [p])
      .subscribe(p => {
        if (!isNaN(p[0])) {
          this.posts = this.posts.filter(pos => pos.id != <Number>p[0]);
          console.log(this.posts);
        } else {
          this.posts = this.posts.concat(p);
          console.log(this.posts);
        }

      });
    //...
  }

    saveSPoT() {
    this.demoService.save(this.post).subscribe(r => this.editPosts.next(r));
  }

  remove(id: number) {
    this.demoService.remove(id).subscribe(r => this.editPosts.next(r));
  }


}
