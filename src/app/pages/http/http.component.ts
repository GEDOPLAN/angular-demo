import { Component, OnInit } from '@angular/core';
import { SourceLinkServiceService } from '../../services/source-link-service.service';
import { HTTPServiceService, Post } from './services/httpservice.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.less'],
  providers: [HTTPServiceService]
})
export class HttpComponent implements OnInit {

  posts: Post[];
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

}
